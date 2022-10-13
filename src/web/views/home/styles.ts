import styled from "styled-components";
import { COLORS } from "../../../../utils/colors";

export const HomeHolder = styled.div`
    background-color:${COLORS.alabasterDark};
    display:flex;
    align-items:center;
    justify-content:center;
    min-width:100%;
    min-height:80vh; 
    padding-left: clamp(1rem, 10.42vw, 12.5rem);
    padding-right: clamp(1rem, 14.58vw, 12.5rem);
`;