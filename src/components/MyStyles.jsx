import styled from 'styled-components';

export const OuterContainer = styled.div`
    .inputSection {
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: .6rem;
  max-width: 400px;
  align-items: center;
}

.card {
        display: flex;
        flex-direction: column;
        max-width: 600px;
        border: none;
        box-shadow: rgba(206, 206, 206, 0.2) 0px 7px 29px 0px;
        background-color: #424242;
        border-radius: 25px;
        padding: 1rem;
        margin: auto;
}

.img_wrapper {
  display: flex;
  flex-direction: column;
  position: relative;
  margin: auto;
  padding: 2em;
  max-width: 600px;
}

.info_wrapper {
  display: flex;
  flex-direction: column;
  position: relative;
  margin: auto;
  max-width: 400px;
  text-align: left;
  font-weight: bold;
}

img {
  max-width: 400px;
  margin: auto;
}
`