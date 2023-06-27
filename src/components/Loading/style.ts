import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;


    background-color: ${( {theme }) => theme.COLORS.GRAY_600};  
`;

export const LoadContainer = styled.ActivityIndicator.attrs(({theme}) => ({
    color: theme.COLORS.GREEN_700
}))``;

export const Title = styled.Text`
    color: ${( {theme }) => theme.COLORS.GREEN_700};
    margin-top: 10px;
    font-size: 15px;
`;