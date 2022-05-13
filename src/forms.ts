export function disableForms(forms: HTMLFormElement[]) {
  forms.forEach(disableForm)
}
function disableForm(form: HTMLFormElement) {
  disableElements([...form.elements]);
  setClassName(form)
}
function setClassName(form: Element) {
  form.classList.add(`${form.className}--disabled`)
}
function disableElements(elements: Element[]) {
  elements.forEach(disableElement);
}
interface FormElement { disabled: boolean }
function isFormElement(element: object): element is FormElement {
  return "disabled" in element
}
function disableElement(element: Element) {
  if (isFormElement(element))
    element.disabled = true
}
