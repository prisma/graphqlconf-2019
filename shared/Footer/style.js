import styled, { css } from 'styled-components'

// Utils
import { mobile } from '../../utils/media'

// Local
import { AnchorLink } from '../AnchorPoint'

export const Wrapper = styled.footer`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-bottom: 36px;

  ${mobile(css`
    flex-wrap: wrap;
  `)};
`

export const FooterLink = styled.a`
  --color: #aaacaa;

  /* OMG I can't believe I used float, only to use clear. It used to be the other way around */
  float: left;
  clear: both;
  margin-bottom: 10px;
  padding-top: 2.5px;
  padding-bottom: 2.5px;
  padding-left: 2.5px;
  padding-right: 5px;

  font-size: 16px;
  vertical-align: middle;
  color: var(--color);
  transition: background 140ms ease-out;

  ${mobile(css`
    font-size: 18px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 10px;
    padding-left: 10px;
    margin-left: -10px;
    margin-bottom: 5px;
  `)};

  svg {
    fill: var(--color);
    display: inline-block;
    margin-bottom: -2px;
    margin-right: 11px;

    width: 16px;
    height: auto;
  }

  &:hover {
    color: white;
    border-radius: 3px;
    background: rgba(255, 255, 255, 0.3);
  }

  &:active {
    transition: none;
    background: rgba(255, 255, 255, 0.2);
  }
`

export const Column = styled.div`
  /* using + '' like ol' days!  */
  flex-basis: ${p => (p.width ? p.width + 'px' : 'auto')};
  margin-right: 10px;
  flex-shrink: 1;
  flex-grow: 1;

  &:last-child {
    margin-right: 0;
    margin-bottom: 0;
  }

  ${mobile(css`
    margin-bottom: 30px;
    flex-basis: calc(50% - 20px);
  `)};
`

export const LogoColumn = styled(Column)`
  flex-basis: 100px;
  /* To componsate for a little default top for texts bc of line height */
  padding-top: 3px;

  ${mobile(css`
    flex-basis: 100%;
  `)};
`

export const OrganizersColumn = styled(Column)`
  flex-basis: auto;
  margin-left: auto;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;

  > * {
    margin-bottom: 20px;
  }

  ${mobile(css`
    margin-left: none;
    flex-basis: calc(50% - 20px);
    justify-content: flex-start;
    align-items: flex-start;
  `)};
`

export const XWrapper = styled.span`
  margin-left: 17px;
  margin-right: 14px;

  ${mobile(css`
    display: none;
  `)};
`

export const TwitterIcon = props => (
  <svg viewBox="0 0 512.002 512.002" width="1em" height="1em" {...props}>
    <path
      d="M512.002 97.211c-18.84 8.354-39.082 14.001-60.33 16.54 21.686-13 38.342-33.585 46.186-58.115a210.29 210.29 0 0 1-66.705 25.49c-19.16-20.415-46.461-33.17-76.674-33.17-58.011 0-105.042 47.029-105.042 105.039 0 8.233.929 16.25 2.72 23.939-87.3-4.382-164.701-46.2-216.509-109.753-9.042 15.514-14.223 33.558-14.223 52.809 0 36.444 18.544 68.596 46.73 87.433a104.614 104.614 0 0 1-47.577-13.139c-.01.438-.01.878-.01 1.321 0 50.894 36.209 93.348 84.261 103a105.245 105.245 0 0 1-27.674 3.687c-6.769 0-13.349-.66-19.764-1.888 13.368 41.73 52.16 72.104 98.126 72.949-35.95 28.176-81.243 44.967-130.458 44.967-8.479 0-16.84-.496-25.058-1.471 46.486 29.807 101.701 47.197 161.021 47.197 193.211 0 298.868-160.062 298.868-298.872 0-4.554-.104-9.084-.305-13.59 20.526-14.809 38.335-33.309 52.417-54.373z"
      fill="#FFF"
    />
  </svg>
)

export const GithubIcon = props => (
  <svg viewBox="0 0 16 16" fill="none" width="1em" height="1em" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 0C3.581 0 0 3.672 0 8.203c0 3.624 2.292 6.698 5.471 7.783.4.075.546-.178.546-.396 0-.194-.007-.71-.01-1.395-2.226.496-2.695-1.1-2.695-1.1-.364-.947-.889-1.2-.889-1.2-.726-.508.055-.498.055-.498.803.058 1.225.846 1.225.846.714 1.253 1.873.89 2.329.68.073-.529.28-.89.508-1.095-1.777-.207-3.644-.911-3.644-4.054 0-.896.311-1.628.823-2.201-.082-.208-.357-1.042.079-2.171 0 0 .671-.22 2.2.84A7.485 7.485 0 0 1 8 3.967c.68.004 1.364.095 2.003.277 1.527-1.062 2.198-.841 2.198-.841.436 1.129.162 1.963.08 2.17.512.574.822 1.306.822 2.202 0 3.15-1.87 3.844-3.652 4.047.286.253.542.754.542 1.52 0 1.096-.01 1.98-.01 2.25 0 .219.145.474.55.394C13.71 14.898 16 11.825 16 8.203 16 3.673 12.418 0 8 0z"
      fill="#CACACA"
    />
  </svg>
)

export const MailIcon = props => (
  <svg viewBox="0 0 17 14" fill="none" width="1em" height="1em" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.294 1H2.73C1.766 1 1 1.836 1 2.888v8.224C1 12.164 1.766 13 2.73 13h11.54c.963 0 1.73-.836 1.73-1.888V2.888C16.023 1.836 15.232 1 14.293 1zM2.73 2.079h11.54a.63.63 0 0 1 .222.027L8.512 7.12l-5.98-5.015c.074-.027.148-.027.198-.027zm11.564 9.815c.42 0 .742-.35.742-.809V3.022L8.512 8.47 1.988 2.996v8.09c0 .458.322.808.742.808h11.564z"
      fill="#CACACA"
    />
    <path
      d="M16 2.888l-.3-.007v.007h.3zm-1.508-.782l.193.23.398-.335-.488-.177-.103.282zM8.512 7.12l-.193.23.193.162.193-.162-.193-.23zm-5.98-5.015l-.102-.282L1.94 2l.398.334.193-.23zm12.504.916h.3v-.64l-.493.41.193.23zM8.512 8.47l-.193.23.193.16.192-.16-.192-.23zM1.988 2.996l.193-.23-.493-.414v.644h.3zM2.73 1.3h11.564V.7H2.73v.6zM1.3 2.888c0-.912.656-1.588 1.43-1.588V.7C1.576.7.7 1.695.7 2.888h.6zm0 8.224V2.888H.7v8.224h.6zM2.73 12.7c-.774 0-1.43-.676-1.43-1.588H.7c0 1.193.876 2.188 2.03 2.188v-.6zm11.54 0H2.73v.6h11.54v-.6zm1.43-1.588c0 .912-.656 1.588-1.43 1.588v.6c1.153 0 2.03-.995 2.03-2.188h-.6zm0-8.224v8.224h.6V2.888h-.6zM14.293 1.3c.753 0 1.427.679 1.405 1.58l.6.015C16.328 1.693 15.42.7 14.294.7v.6zm-.024.479H2.73v.6h11.54v-.6zm.325.045c-.132-.048-.258-.045-.325-.045v.6c.08 0 .103.002.12.009l.205-.564zM8.705 7.35l5.98-5.016-.386-.46-5.98 5.016.386.46zM2.339 2.335l5.98 5.016.386-.46-5.98-5.015-.386.46zm.39-.556c-.046 0-.17-.002-.3.045l.206.564a.148.148 0 0 1 .035-.007.6.6 0 0 1 .06-.002v-.6zm12.007 9.306c0 .318-.211.51-.442.51v.6c.61 0 1.042-.51 1.042-1.11h-.6zm0-8.063v8.063h.6V3.022h-.6zM8.704 8.7l6.524-5.447-.385-.46L8.32 8.238l.384.46zM1.796 3.225L8.319 8.7l.386-.46L2.18 2.767l-.385.46zm.492 7.86v-8.09h-.6v8.09h.6zm.442.51c-.23 0-.442-.192-.442-.51h-.6c0 .6.432 1.11 1.042 1.11v-.6zm11.564 0H2.73v.6h11.564v-.6z"
      fill="#CACACA"
    />
  </svg>
)

export const MediumIcon = props => (
  <svg viewBox="0 0 17 14" width="1em" height="1em" {...props}>
    <path d="M5.25 0H.5l1.75 2.38v8.98L0 13.74h5.25l-2-2.38V3.7L7.75 14 12 3.7v8.72l-1.25 1.32H17l-1.5-1.32V1.32L17 0h-4.5L9 8.2 5.25 0z" />
  </svg>
)
