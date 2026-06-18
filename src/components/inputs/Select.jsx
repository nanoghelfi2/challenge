import { useRef } from 'react';

import sx from './Input.module.css';

export const Select = ({
    label,
    getOptionText,
    errorMessage,
    error,
    warning,
    required,
    onChange,
    disabled,
    iconLeft,
    iconRight,
    value,
    className,
    options,
    ...props
}) => {
    const rightPadding = 8 + (iconRight ? 25 : 0) + (required ? 15 : 0);
    const leftPadding = 8 + (iconLeft ? 25 : 0);

    const inputRef = useRef();

    const focusInput = () => {
        inputRef?.current?.focus();
    };

    return (
        <div className={`relative ${className}`}>
            {iconLeft && (
                <div
                    className={`${sx['icon-container']} absolute top-0 left-1 ${error ? 'text-red-500' : ''}`}
                    onClick={focusInput}
                >
                    {iconLeft}
                </div>
            )}
            {label && (
                <label
                    className={sx['input-label']}
                    style={{ left: `${leftPadding}px` }}
                    onClick={focusInput}
                >
                    {label}
                </label>
            )}
            <select
                className={sx['input-main']}
                value={value}
                onChange={(e) => onChange?.(e.target.value, e)}
                disabled={disabled}
                ref={inputRef}
                data-required={required}
                data-error={error || !!errorMessage}
                data-warning={warning}
                style={{ paddingLeft: `${leftPadding}px`, paddingRight: `${rightPadding}px` }}
                {...props}
            >
                {options?.map((option) => {
                    const optionText = getOptionText ? getOptionText(option) : option;
                    return (
                        <option key={option} value={option}>
                            {optionText}
                        </option>
                    );
                })}
            </select>
            {
                <div className="flex absolute top-0 right-1 h-full" onClick={focusInput}>
                    {iconRight && <div className={sx['icon-container']}>{iconRight}</div>}
                    {required && (
                        <div className={`${sx['icon-container']} w-3.75!`}>
                            {' '}
                            <span className={sx['required-indicator']} />{' '}
                        </div>
                    )}
                </div>
            }
            <p className={sx['input-error-message']}> {errorMessage} </p>
        </div>
    );
};
