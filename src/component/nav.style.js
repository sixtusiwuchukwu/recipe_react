import styled from 'styled-components'

export const Nav = styled.header`
display:flex;
padding:10px 100px;

li{
    list-style: none;
    cursor: pointer;
    font-weight: 400;
  font-style: normal;
  transition: border-bottom 0.3s ease, color 0.3s ease, transform 0.3s ease;

}
li:hover{
    border-bottom: 2px solid #F8CC36;
    transform: translateY(-2px); /* Slightly lift the item on hover */

}

ul{
    display: flex;
    justify-content: space-between;
    width: 30%;
    height: 30px;
}
`