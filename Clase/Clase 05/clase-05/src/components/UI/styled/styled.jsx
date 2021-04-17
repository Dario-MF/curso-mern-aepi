import styled from 'styled-components';

export const FlexDivRow = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 800px;
`;

export const PaginationDiv = styled.div`
    display: flex;
    width: 100%;
    justify-content: ${ ({page}) => {
        if(page === 'ultima') return 'flex-end';
        else if (page === 'primera') return 'flex-start';
        else  return 'space-between';
        
    }}
`;