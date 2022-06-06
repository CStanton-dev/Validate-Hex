export default function validateHex(str) {
  const REG = /^#([0-9a-f]{3}){1,2}$/i;
  const IS_VALID = REG.test(str);

  let hexCode = str;

  if (IS_VALID === true) {
    document.body.style.backgroundColor = hexCode;
  }

  return IS_VALID;
}
