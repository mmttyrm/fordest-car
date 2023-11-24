'use client';
import Link from 'next/link';
import classNames from 'classnames/bind';
import style from './header.module.css';
import Logo from '@/assets/svg/logo';

const cx = classNames.bind(style);
function Header() {
    return (
        <div className={cx('wrapper', 'container')}>
            <Link href={'#'} className={cx('logo')}>
                <Logo fillColor={'#fafafa'} width={100} />
                <h1 className={cx('logo-text')}>FORDEST</h1>
            </Link>

            <div className={cx('navbar')}>
                <Link href={'#'} className={cx('nav-item', 'active')}>
                    Models
                </Link>
                <Link href={'#'} className={cx('nav-item')}>
                    Technology
                </Link>
                <Link href={'#'} className={cx('nav-item')}>
                    History
                </Link>
                <Link href={'#'} className={cx('nav-item')}>
                    Shop
                </Link>
                <Link href={'#'} className={cx('nav-item')}>
                    Owner
                </Link>
            </div>
            <div className={cx('control')}>
                <div className={cx('user')}>
                    <img
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlK-Ky4QaogWNWEZccL7rhvhQXP3tksjjLgX3v3jC2Tg&s'
                        alt=''
                        className={cx('avatar')}
                    />
                </div>
                <div className={cx('language')}>English</div>
            </div>
        </div>
    );
}

export default Header;
