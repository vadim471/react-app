import styled from "styled-components"
import { useSetPriorityByIdItem } from "../../data/hooks/useData";



const Input = styled.select`
        width: 50px;
        height: 50px;
        border-radius: 30%;
        background-color: #FFFFFF;`


    export const PrioritySelect = ({ id, priority, setPriority, setColor }) => {
            const { mutate } = useSetPriorityByIdItem();
        
            const onChangeHandler = (e) => {
                if (setPriority) {
                    setPriority(e.target.value);
                }
        
                if (setColor) {
                    setColor(e.target.value);
                }
        
                mutate({
                    id,
                    priority: e.target.value
                });
            };
        
            return (
            <Input value={priority}
                   onChange={onChangeHandler} >
                {[1, 2, 3].
                map(num =>
                <option
                    key={num}
                    value={num}>
                  {num}
                </option>)}
            </Input>
            );
        }