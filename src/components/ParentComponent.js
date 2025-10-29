import { ChildrenComponent } from "./ChildrenComponent";

export const ParentComponent = () => {
    const greetParent = (childName) => {
        alert(`Hello Parent from ${childName}`);
    }
    return <ChildrenComponent greetHandler={greetParent} />
}
