import React from 'react';
import StyleFilterList from "./style";
import PropTypes from 'prop-types';
import Input from "../Input";
import Filter from "../Filter";
import Select from "../Select";
import Option from "../Option";
import Button from "../Button";
import Icon from "../Icon";
import {ReactComponent as Plus} from "../../asserts/icons/plus.svg";

function FilterList
({
     children,
     options,
     filterLabel = "列表排序",
     actionLabel,
     ...rest

 }) {
    return (
        <StyleFilterList {...rest}>
            <Input.Search/>
            <Filter style={{padding: "20px 0"}}>
                {
                    options && (
                        <Filter.Filters label={filterLabel}>
                            <Select>
                                {
                                    options.map((option, index) => (
                                        <Option key={index}>{option}</Option>
                                    ))
                                }
                            </Select>
                        </Filter.Filters>
                    )

                }

                {
                    actionLabel && (
                        <Filter.Action label={actionLabel}>
                            <Button>
                                <Icon icon={Plus} width={12} height={12}/>
                            </Button>
                        </Filter.Action>
                    )
                }
            </Filter>
            {children}
        </StyleFilterList>
    );
}


FilterList.propTypes = {
    children: PropTypes.any,
    options: PropTypes.array,
    filterLabel: PropTypes.string,
    actionLabel: PropTypes.string
};

export default FilterList;