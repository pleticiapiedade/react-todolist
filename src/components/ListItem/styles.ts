import styled from "styled-components";

type ContainerProps = {
    done: boolean;
}

export const Container = styled.div(({done}:ContainerProps) => (
    `
    display: flex;
    align-items: center;
    gap: 5px;
    background: #20212C;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    margin-top: 10px;

    label{
        color: #CCC;
        text-decoration: ${done ? 'line-through' : 'initial'};
    }

    input{
        width: 25px;
        height: 25px;
    }
`
));