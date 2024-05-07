export function equal(actual, expected, message) {
  if (actual === expected) {
    const defaultMessage = `Expected ${expected} and received ${actual}`;
    console.info("Pass: " + (message || defaultMessage));
  } else {
    const defaultMessage = `Expected ${expected} but received ${actual} instead`;
    console.error("Fail: " + (message || defaultMessage));
  }
}

export function notEqual(actual, expected, message) {
  if (actual !== expected) {
    const defaultMessage = `${expected} is different to ${actual}`;
    console.info("Pass: " + (message || defaultMessage));
  } else {
    const defaultMessage = `${expected} is the same as ${actual}`;
    console.error("Fail: " + (message || defaultMessage));
  }
}
export function greaterThan(actual, expected, message) {
  if (actual > expected) {
    const defaultMessage = `${actual} is greater than ${expected}`;
    console.info("Pass: " + (message || defaultMessage));
  } else {
    const defaultMessage = `${actual} is not greater than ${expected}`;
    console.error("Fail: " + (message || defaultMessage));
  }
}

export async function test(name, testFunction) {
  console.group(name);
  await testFunction();
  console.groupEnd(name);
}
