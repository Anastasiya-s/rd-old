import React from 'react';

const DetailItem = ({ details }) => (
    details.map(detail => <div>{detail.name}</div> )
);

export default DetailItem;
