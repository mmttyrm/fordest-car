'use client';
import Link from 'next/link';
import classNames from 'classnames/bind';
import style from './header.module.css';

const cx = classNames.bind(style);
function Header() {
    return (
        <div className={cx('header')}>
            <h1>logo</h1>
            <ul>
                <li>
                    {''}
                    <Link href={'#'}>abc</Link>
                </li>
                <li> btn2</li>
                <li> btn3</li>
                <li> btn4</li>
                <li> btn5</li>
            </ul>
        </div>
    );
}

export default Header;
