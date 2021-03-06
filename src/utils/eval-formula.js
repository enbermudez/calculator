/**
 * Evaluates a string as a math formula.
 * @param {String} str String containing the formula to be eval.
 * @returns {number} Formula result.
 */
export default (str) => {
  const arr = str.split('');

  const cleanArr = arr.filter((char, idx) =>
    !/^\d+$/g.test(char) ? char !== arr[idx + 1] : true
  );

  const formula = cleanArr.join('');

  const sanitazedFormula = formula.replace(/[^-()\d/*+.]/g, '');

  try {
    // eslint-disable-next-line no-eval
    const result = eval(sanitazedFormula);
    return result;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('Wrong formula provided', e);
    return 'Error';
  }
};
