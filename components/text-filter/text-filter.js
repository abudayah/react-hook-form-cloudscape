import { __rest } from "tslib";
import React, { useCallback } from 'react';
import { Controller } from 'react-hook-form';
import { TextFilter } from '@cloudscape-design/components';
const CTextFilter = (_a) => {
    var { name, control, onChange } = _a, props = __rest(_a, ["name", "control", "onChange"]);
    const handleOnChange = useCallback((formOnChange, e) => {
        formOnChange(e.detail.filteringText);
        onChange === null || onChange === void 0 ? void 0 : onChange(e);
    }, [onChange]);
    return (React.createElement(Controller, { name: name, control: control, render: ({ field: { ref, onChange, value } }) => (React.createElement(TextFilter, Object.assign({ ref: ref, filteringText: value, onChange: handleOnChange.bind(null, onChange) }, props))) }));
};
export default CTextFilter;
//# sourceMappingURL=text-filter.js.map