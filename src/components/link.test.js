// link.test.js
import React from 'react';
import renderer from 'react-test-renderer';

import { Link } from '../../src/components/link';

it('Ссылка рендерится без ошибок', () => {
    const tree = renderer
        .create(<Link title="Бургерная" url="/" />)
        .toJSON();
        expect(tree).toMatchSnapshot();
})