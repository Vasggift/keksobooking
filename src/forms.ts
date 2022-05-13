export function disableForms(forms: HTMLFormElement[]) {
  forms.forEach(createStateElement(true))
}
interface FormElement { disabled: boolean }
function isFormElement(element: object): element is FormElement {
  return "disabled" in element
}

function createStateElement(isDisabled: boolean) {
  function changeDisabled(element: Element) {
    if (isFormElement(element))
      element.disabled = isDisabled
  }
  function changeElements(elements: Element[]) {
    elements.forEach(changeDisabled)
  }
  function changeClassList(form: HTMLElement) {
    const name = form.dataset["class"]
    form.className = (` ${name} ${isDisabled ? (`${name}--disabled`) : ("")}`)
  }
  return function (form: HTMLFormElement) {
    changeElements([...form.elements]);
    changeClassList(form)
  }
}
export const enableForm = createStateElement(false)