'use client';
// import Image from 'next/image';
import styles from './page.module.css';
import classNames from 'classnames/bind';
import mustang from '@/assets/images/mustang1.png';
import { Flag, Speed, Engine, Pack } from '@/assets/svgs';
const cx = classNames.bind(styles);
export default function Home() {
    return (
        <main className={cx('container', 'wrapper')}>
            <div className='row'>
                <div className='col-5'>
                    <div className='content__header'>
                        <h1>Ford Mustang Shelby GT350R</h1>
                        <p>
                            As a track-ready version of the Ford Mustang, the Shelby GT350 has even
                            more muscular styling and next-level performace
                        </p>
                    </div>
                    <div className={cx('price')}>
                        <span>Starting At</span>
                        <p>68,230</p>
                    </div>
                </div>
                <div className='col-7'>
                    <div className='image__content'>
                        <img className={cx('image__header')} src={mustang.src} alt='mustang' />
                    </div>
                    <div className={cx('info', 'grid')}>
                        <div className='row'>
                            <div className='col'>
                                <Speed className={cx('icon__content-item')} />
                                <div className={cx('text__content-item')}>Max, speed</div>
                                <span className={cx('desc__content-item')}>244 MPH</span>
                            </div>
                            <div className='col'>
                                <Flag className={cx('icon__content-item')} />
                                <div className={cx('text__content-item')}>Max, speed</div>
                                <span className={cx('desc__content-item')}>244 MPH</span>
                            </div>
                            <div className='col'>
                                <Engine className={cx('icon__content-item')} />
                                <div className={cx('text__content-item')}>Max, speed</div>
                                <span className={cx('desc__content-item')}>244 MPH</span>
                            </div>
                            <div className='col'>
                                <Pack className={cx('icon__content-item')} />
                                <div className={cx('text__content-item')}>Max, speed</div>
                                <span className={cx('desc__content-item')}>244 MPH</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
