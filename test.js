let data = [{'domain': '.netflix.com', 'expiry': 1749391360, 'httpOnly': True, 'name': 'SecureNetflixId', 'path': '/', 'sameSite': 'Strict', 'secure': True, 'value': 'v%3D2%26mac%3DAQEAEQABABT1G100_at_h5Yjh-Sg0rM48AnG3LaSmsw.%26dt%3D1717855358563'}, {'domain': '.netflix.com', 'expiry': 1749391364, 'httpOnly': False, 'name': 'OptanonConsent', 'path': '/', 'sameSite': 'Lax', 'secure': False, 'value': 'isGpcEnabled=0&datestamp=Sat+Jun+08+2024+19%3A32%3A44+GMT%2B0530+(India+Standard+Time)&version=202405.1.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=dd27b8c4-c1fe-40cc-bcd9-322bc178adac&interactionCount=1&isAnonUser=1&landingPath=NotLandingPage&groups=C0001%3A1%2CC0002%3A1%2CC0003%3A1%2CC0004%3A1&AwaitingReconsent=false'}, {'domain': '.netflix.com', 'expiry': 1749391360, 'httpOnly': True, 'name': 'NetflixId', 'path': '/', 'sameSite': 'Lax', 'secure': True, 'value': 'v%3D2%26ct%3DBQAOAAEBEBrDpAIyL8HMRg-r1qnkZOGB0AGeampNi0peFOxvSXuykK5bRqaeV6NhmHqEwmO81YJt5eVGAfsyqEDfTXQesJweeRb5-46y-NJGUXThMYTsRcRgEyH6dTa5T5APB5Oph9SWu38hikGNUYIum3vkdDdGTzIlLcRrdPiLxdDeh-zWcnVfI7bUtLAi1kqtX-149DmvnAu0Y2ph-ErPkTGcdmYd1jJHxxqMZ48u56KvOetCCBMi8N6ctUEz5S1PUtHQ9Gei1zkgWRLdVIzPqp-nJ-Sso_nbQikSDK__b_fJV3ZMK4DGHqztBXMZfSZdOsgpEKH0WBCNCSBH9gHbdx2QHm6iwQrd24nFIP9PddL9No7zTlu3_g7-4GLsOqjcIMfNI_qYF2_PS87zNNZK-8d39f3C5bGXmgG3AYQ2UKuFOWNC3pAXT5EOssHzc5aaHGEqKutPyozvFVdvKND-MlqDSvFx927MNjx2EbcPmspl1sTNjz9b3rEa4O85sNmfccg7LpR4tZqm_lF24q2cc6icNIwSmLUPooBEPpRAL2SSxtuzjQS6W4QvoiByl2ub1dmxsg_cSkFkP0kJNFcLTUN0sASbd0sMmDvJUjDMtBI2h2_1gPye-177tm2nI5hXKeGXVCoC%26bt%3Ddbl%26ch%3DAQEAEAABABQ_ydrhCQuNYz2IVtfObJS8CCBcRsoHm8E.%26mac%3DAQEAEAABABTicq1w5wO14zzgyg2FfgJJtBUK9VgK1WE.'}, {'domain': '.netflix.com', 'expiry': 1749391360, 'httpOnly': False, 'name': 'nfvdid', 'path': '/', 'sameSite': 'Lax', 'secure': False, 'value': 'BQFmAAEBECC1AIf-6SgXltGg9drenqVgNhPyNytGmFRpD3l3JOPN8X3chKu2SAy_yADNxGWOezAk84jdTZP8okABizS-T-0MUAeTTrljPfcYexEwJU7wMOaQY9j2ttuMG8NJXAsdkUar1QZI6to2htMjFgEdBb0W'}, {'domain': '.netflix.com', 'expiry': 1717866160, 'httpOnly': False, 'name': 'flwssn', 'path': '/', 'sameSite': 'Lax', 'secure': False, 'value': '6489b307-c879-40f4-b53e-be3f1e762198'}]

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
