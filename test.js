let data = [{'domain': '.netflix.com', 'expiry': 1749314797, 'httpOnly': true, 'name': 'SecureNetflixId', 'path': '/', 'sameSite': 'Strict', 'secure': true, 'value': 'v%3D2%26mac%3DAQEAEQABABTuRoeCoUw4UXykTAppwi2m9igHlknNc1k.%26dt%3D1717778796785'}, 
{'domain': '.netflix.com', 'expiry': 1749314798, 'httpOnly': false, 'name': 'OptanonConsent', 'path': '/', 'sameSite': 'Lax', 'secure': false, 'value': 'isGpcEnabled=0&datestamp=Fri+Jun+07+2024+22%3A16%3A38+GMT%2B0530+(India+Standard+Time)&version=202405.1.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=2a171dea-c483-460e-972a-5fcc5d68b467&interactionCount=1&isAnonUser=1&landingPath=NotLandingPage&groups=C0001%3A1%2CC0002%3A1%2CC0003%3A1%2CC0004%3A1&AwaitingReconsent=false'}, 
{'domain': '.netflix.com', 'expiry': 1749314797, 'httpOnly': true, 'name': 'NetflixId', 'path': '/', 'sameSite': 'Lax', 'secure': true, 'value': 'v%3D2%26ct%3DBQAOAAEBEGWrYMDWmZDPB7L_mLHU_vWB0AhwtmXRz2becVxUZBOwWkh3nnfEoC8dgPkETLIqA-MTBvsemNV3TbYRfiB8WpX7STU93YdSFjED3dYlodDb6TRKh2EB7vtmnz2biTqa5lDeeTKDxaz9lMMQp3NZ9yfvvv3sQiIHPU6Ru3X8Ck_TRRozPUXy-rY_z2p6rPb3YGvg2ihxJCYjkVWFPelZUJTfyxHMPDau_DWU1ev8lRcf2OWBV5_glWCUF_qOOL1hQ7syifZW-_n_kF11T0sLOhZvbkG9igBzHAoyV0kjzsVMmURMpOQ3boYOUXJ60H3QqXQtvL4Aa3ezlzBhsghfVSrewKdnjOKjAYqYMEwAgCMmQow1SQcGWZWh8QQRQJFMsZtuylRKFlkLL_nDrCuHhRpU3S1ukcwtIsWAvFd1avff0a5S3bX0HB8Z1kalRz8PYWJO4FlaiIKzoTOsVJ8X0DEIzJhZiCHhYDsykRBzwl2KiH_X6Co80mLYiGPiuySf1IB085HIhEEcWSgnKDsCjsM5V5OtESr6X_ycBvKVAPQnw_87A1so5nAPYS2HuoJGU5DuGS3jJc8k18pbcTohtGzgiM4tFfDuwnbM06OZmQuO6U-_EKYgToH8X4IK9y3R7mUF%26bt%3Ddbl%26ch%3DAQEAEAABABQ_ydrhCQuNYz2IVtfObJS8CCBcRsoHm8E.%26mac%3DAQEAEAABABRwE7nUv52zjAsTt6FZKUu4guKn5RKNRMk.'}, 
{'domain': '.netflix.com', 'expiry': 1749314797, 'httpOnly': false, 'name': 'nfvdid', 'path': '/', 'sameSite': 'Lax', 'secure': false, 'value': 'BQFmAAEBEOEYTheyCTFzsp9t-P7d7x9g5EPkJ_wC4BCAannT_hGQVwPfP-2VaoXFVnNq5CnJgk6xFOmNKp3k5v9PgQfRzxmzDRUlavsMKMASxdSNC1tqLfZdoTWqLOs5pAUyrdaRZmP34BZwmn0D0sE9z7-HUcX3'}, 
{'domain': '.netflix.com', 'expiry': 1717789597, 'httpOnly': false, 'name': 'flwssn', 'path': '/', 'sameSite': 'Lax', 'secure': false, 'value': 'f6308d07-ed44-4531-8e17-66d59fbb0b40'}]

let btn = document.querySelector('.btn')

btn.addEventListener('click', () => {



data.forEach((i) => {
    expire = new Date(i.expiry * 1000).toUTCString()
    console.log(`${i.name}=${i.value}; expires=${expire}; path=/; domain=${i.domain}`)
    document.cookie = `${i.name}=${i.value};
    expires=${expire};
    path=/;
    domain=${i.domain};
    ${i.httpOnly ? 'httpOnly': ''};
    ${i.secure ? 'secure':''}`
})
window.location.href = 'https://netflix.com'
})