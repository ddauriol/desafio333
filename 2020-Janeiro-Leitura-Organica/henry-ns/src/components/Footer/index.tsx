import React, { FC } from 'react';

import ExternalLink from '../ExternalLink';

import { Container, Heart } from './styles';

const Footer: FC = () => (
  <Container>
    <p>
      <ExternalLink href="https://leituraorganica.com.br/">
        Leitura Orgânica
      </ExternalLink>
      {'  © 2020, todos os direitos resevados'}
    </p>
    <p>
      {'Site feito '}
      <Heart />
      {' com por '}
      <ExternalLink href="https://thehenry.dev/">Henrique Miranda</ExternalLink>
    </p>
  </Container>
);

export default Footer;
