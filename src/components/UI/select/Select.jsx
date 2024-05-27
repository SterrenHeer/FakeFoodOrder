import React from "react";

const Select = function ({options, dafaultValue, value, onChange}) {
	return (
		<div>
			<hr style={{margin: '15px 0'}} />
			<select 
				value={value}
				onChange={event => onChange(event.target.value)}
			>
				<option disabled value="">{dafaultValue}</option>
				{options.map(option =>
					<option key={option.value} value={option.value}>
						{option.name}
					</option>
				)}
			</select>
		</div>
	)
}

export default Select;
