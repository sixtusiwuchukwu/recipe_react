import styled from 'styled-components';

export const FormContainer = styled.form`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  outline: none;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  height: 100px;
  resize: none;
  outline: none;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
  color: white;
  background-color: #ff5722;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: #e64a19;
  }
`;

export const ImagePreview = styled.img`
  margin-top: 10px;
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 4px;
`;
