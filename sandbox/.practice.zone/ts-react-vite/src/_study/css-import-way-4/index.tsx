import styled from 'styled-components';
import Child from './Child'

const MyFont = styled.h4`
    font-size: 25px;
    color: ${props => props.color};
`;


export default function Index() {
    return (
        <>
            <MyFont color="blue">I Love React</MyFont>
            <Child />
        </>
    )
}