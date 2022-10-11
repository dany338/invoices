/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useCallback } from "react";

const useValidation = (intialState: any, validate: any, fn: any) => {
  const [ values, setValues ] = useState(intialState);
  const [ errors, setErrors ] = useState({});
  const [ request, setRequest] = useState(false);

  const memoizedCallback = useCallback(
    () => {
      setRequest(!request);
    },
    [request],
  );

  useEffect(() => {
    if (request) {
      const isNotErrors = Object.keys(errors).length === 0;
      if (isNotErrors) {
        fn();
        memoizedCallback();
      }
    }
  }, [errors, fn, request, values, validate, memoizedCallback]);

  const handleChange = (e: any): void => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e: any): void => {
    e.preventDefault();
    const errorsValidation = validate(values);
    setErrors(errorsValidation);
    setRequest(Object.keys(errorsValidation).length === 0);
    e.stopPropagation();
  };

  return [ values, errors, handleChange, handleSubmit ];
};

export default useValidation;
