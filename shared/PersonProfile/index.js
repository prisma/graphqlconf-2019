import React from 'react'
import styled, { css } from 'styled-components'
import ReactImage from 'react-image'

// Utils
import { mobile } from '../../utils/media'

// Local
import GithubIcon from './GithubIcon'
import TwitterIcon from './TwitterIcon'

export const PersonProfile = ({
  name,
  bio,
  photoSrc,
  twitter,
  github,
  placeholder
}) => {
  return (
    <Wrapper>
      <Photo>
        {placeholder ? (
          <img src="/static/knock.svg" />
        ) : (
          <StyledReactImage src={photoSrc} />
        )}
      </Photo>

      <Profile>
        <FirstRow>
          <Name>{name}</Name>
          <Links>
            {twitter && (
              <IconLink href={`https://twitter.com/${twitter}`}>
                <TwitterIcon />
              </IconLink>
            )}
            {github && (
              <IconLink href={`https://github.com/${github}`}>
                <GithubIcon />
              </IconLink>
            )}
          </Links>
        </FirstRow>
        <Bio>{bio}</Bio>
      </Profile>
    </Wrapper>
  )
}

const Wrapper = styled.div``

const Photo = styled.div`
  width: 168px;
  height: 168px;
  background: #1f1f1f;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  ${mobile(css`
    width: 128px;
    height: 128px;
  `)};
`

const StyledReactImage = styled(ReactImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`

const Profile = styled.div`
  margin-top: 46px;

  ${mobile(css`
    margin-top: 26px;
  `)};
`

const FirstRow = styled.div`
  display: flex;
  align-items: flex-end;
`

const Name = styled.div`
  font-weight: bold;
  font-size: 18px;
  line-height: 1.4;
  vertical-align: middle;
`

const Links = styled.div`
  margin-left: 8px;
  padding-bottom: 4px;
  flex-shrink: 0;
  flex-grow: 1;

  display: flex;
  align-items: center;
`

const IconLink = styled.a`
  cursor: pointer;
  display: inline-block;
  margin-right: 6px;
  line-height: 1;

  /* for svg */
  font-size: 15px;
`

const Bio = styled.div`
  margin-top: 8px;

  font-family: proxima-nova, sans-serif;
  font-size: 16px;
  line-height: 1.45;
  color: rgba(255, 255, 255, 0.5);
`
