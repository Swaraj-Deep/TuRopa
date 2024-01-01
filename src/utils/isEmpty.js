function isEmpty(object) {
  return object == null || Object.keys(object).length === 0;
}

export default isEmpty;
