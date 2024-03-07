import React, { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import s from "./Input.module.css";
import cloudIcon from "../../assets/svg/cloud-upload.svg";

export default function Input({
    label,
    type,
    placeholder,
    name,
    tag,
    fileClass,
    ...rest
}: InputProps) {
    return (
        <div className={s.inputBlock}>
            <label htmlFor={name}>{label}</label>
            {type === "file" ? (
                <>
                    <input
                        {...rest}
                        name={name}
                        type={type}
                        id={name}
                        placeholder={placeholder}
                    />
                    <label
                        htmlFor={name}
                        className={`${s.FileTypeInput} ${fileClass}`}
                    >
                        <div>
                            <img src={cloudIcon} alt="choose a file" />{" "}
                            <p>
                                {tag ? (
                                    <span>
                                        <small>{tag.slice(0, 15)}...</small>
                                    </span>
                                ) : (
                                    <>
                                        <span>Choose a file </span>
                                        &quot;or drag it here&quot;
                                    </>
                                )}
                            </p>
                        </div>
                    </label>
                </>
            ) : (
                <input
                    {...rest}
                    name={name}
                    type={type}
                    id={name}
                    placeholder={placeholder}
                />
            )}
        </div>
    );
}

// ?? TYPES
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    type: HTMLInputTypeAttribute;
    label?: string;
    placeholder?: string;
    name: string;
    tag?: string;
    fileClass?: string;
}
