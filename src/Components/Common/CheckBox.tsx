import React from "react"

interface CheckBoxProps {
    name: string
    isChecked: boolean
}

const CheckBox: React.FunctionComponent<CheckBoxProps> = (props: CheckBoxProps) => {
    return (
        <React.Fragment>
            <input type="checkbox" checked={props.isChecked}/>{props.name}
        </React.Fragment>
    )
}

export { CheckBox }