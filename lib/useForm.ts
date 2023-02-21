import { set } from 'nprogress';
import { useState } from 'react';

export default function useForm(initial = {}) {
  const [inputs, setInputs]: any = useState(initial);

  function handleChange(e: any) {
    let { value, name, type } = e.target

    if (type === 'number') {
      value = parseInt(value);
    }

    // if (type === 'file') {
    //   console.log(e.target)
    // }

    setInputs({
      //copy existing state
      ...inputs,
      [name]: value
    })
  }

  function resetForm() {
    setInputs(initial);
  }

  function clearForm() {
    const blankState = Object.fromEntries(Object.entries(inputs).map(([key, value]) => [key, ' ']))

    setInputs(blankState);
  }

  return {
    inputs,
    handleChange,
    resetForm,
    clearForm
  }
}
