import React from 'react';

const _CcyRow = ({
    text,
    bold,
    muted,
    value,
    ccySymbol,
}) => (
    <div className="row ccyRowContainer">
        <span className="text-secondary small text-left ccyRowElement col-lg-6">{text}</span>
        <span className={""+(muted?"text-secondary ":"text-primary ")+"text-right ccyRowElement col-lg-5"}>{isNaN(value)?"n/a":(bold?<b>{value.toFixed(2)}</b>:value.toFixed(2))}</span>
        <span className={""+(muted?"text-secondary ":"text-primary ")+"text-right ccyRowElement col-lg-1"}>{bold?<b>{ccySymbol}</b>:ccySymbol}</span>
    </div>
);

export default _CcyRow;

