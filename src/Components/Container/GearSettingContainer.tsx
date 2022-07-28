import React from "react"
import { Gear } from "../../Models/Gears/Gear"

interface GearSettingsContainerProps {
    gears: Gear[];
    dispatchSelecteGear(gear: Gear): void
}

const GearSettingContainer: React.FunctionComponent<GearSettingsContainerProps> = (props: GearSettingsContainerProps) => {

    // interface GearSettingItemProps {
    //     gear: Gear;
    // }

    // const GearSettingItem: React.FunctionComponent<GearSettingItemProps> = (props: GearSettingItemProps) => {
    //     return (
    //         <div>
    //             <input type="radio" name={props.gear.part.toString()} value={props.gear.name} /> {props.gear.name}
    //         </div>
    //     )
    // }

    function handleChange(gear: Gear) {
        // console.log("GearSettingContainer : handleChange");
        // console.log(gear);
        props.dispatchSelecteGear(gear);
    }

    return (
        <React.Fragment>
            {props.gears.map((gear) =>
                <React.Fragment key={gear.name}>
                    <div>
                        <input type="radio" name={gear.part.toString()} value={gear.name} onChange={() => handleChange(gear)}/> {gear.name}
                    </div>
                </React.Fragment>
            )}
        </React.Fragment>
    )
}

export { GearSettingContainer }