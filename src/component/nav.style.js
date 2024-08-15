import styled from 'styled-components'

export const Nav = styled.header`
display:flex;
padding:10px 100px;

.mobile-screen,.mobile-screen_{
    display: none;
  
}


li,a{
    list-style: none;
    cursor: pointer;
    font-weight: 400;
  font-style: normal;
  transition: border-bottom 0.3s ease, color 0.3s ease, transform 0.3s ease;

}
li,a:hover{
    border-bottom: 2px solid #F8CC36;
    transform: translateY(-2px); /* Slightly lift the item on hover */

}

ul{
    display: flex;
    justify-content: space-between;
    width: 30%;
    height: 30px;
}


@media screen and (max-width: 800px) {
.large-screen{
    display: none;
}
.mobile-screen_{
    display: block;
}
.mobile-screen{
    display: flex;
    flex-direction: column;
    text-align: left;
    background-color: white;
    top:90px;
    position: absolute;
    width: 100%;
    left: 0;
    right: 0;
    height: 195px;
    margin: 0;
    padding: 0;
    li,a{
        border-bottom: 1px solid #F8CC36;
        width: 100%;
        padding: 15px 20px;
        &:hover{
            background-color: #F8CC36;
        }
    }
}
}
@media screen and (max-width: 600px) {
      padding: 16px 20px;
    }
`