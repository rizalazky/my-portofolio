import React from 'react'

function Profile() {
    return (
        <div>
            <div className='flex-center flex-column'>
                <h2>About</h2>
                <table>
                    <tbody>
                        <tr>
                            <td style={{textAlign:"left"}}>Nama</td>
                            <td  style={{textAlign:"right"}}>Mohammad Rizal Azky</td>
                        </tr>
                        <tr>
                            <td style={{textAlign:"left"}}>Tempat,Tanggal Lahir</td>
                            <td style={{textAlign:"right"}}>Tegal,26 Oktober 1997</td>
                        </tr>
                        <tr>
                            <td style={{textAlign:"left"}}>Nomer Telepon</td>
                            <td style={{textAlign:"right"}}>087888187620</td>
                        </tr>
                        <tr>
                            <td style={{textAlign:"left"}}>Email</td>
                            <td style={{textAlign:"right"}}><a href='mailTo:rizalazky26@gmail.com'>rizalazky26@gmail.com</a></td>
                        </tr>
                        <tr>
                            <td style={{textAlign:"left"}}>Web</td>
                            <td style={{textAlign:"right"}}><a href='https://github.com/rizalazky/'>https://github.com/rizalazky/</a></td>
                        </tr>
                        <tr>
                            <td style={{textAlign:"left"}}>Alamat</td>
                            <td style={{textAlign:"right"}}>Jalan Anggrek 1 Rt 04 Rw 03 Desa Karangdawa Kecamatan Margasari Kabupaten Tegal</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <h2>Pendidikan</h2>
                <p>MI Asy-Syafi'iyah 02 Desa Karangdawa 2003-2007</p>
                <p>MTs Asy-Syafi'iyah 02 Desa Karangdawa 2009-2012</p>
                <p>MAN BABAKAN LEBAKSIU TEGAL/MAN 01 TEGAL 2012-2015</p>
                <p>Politeknik Harapan Bersama Tegal 2016-2019</p>
            </div>
            <div>
                <h2>Hoby</h2>
                <ul>
                    <li className='navbar-list'>Sepak Bola</li>
                    <li className='navbar-list'>Bulu Tangkis</li>
                </ul>
            </div>
        </div>
    )
}

export default Profile
