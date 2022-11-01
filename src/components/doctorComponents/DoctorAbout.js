import React, { useState } from 'react'
import DoctorData from './DoctorData'

const DoctorAbout = () => {
    const [showDetails,setShowDetails] = useState(false)
  return (
    <div className='container mt-3 mb-5'>
        <h3>About Doctor</h3>
        <div className='row justify-content-between'>
            <div className="col-12 col-lg-8">
                <p>Dr. Anita Shyam is a well-known women’s sexual health expert. She has obtained her MBBS and DGO degrees from Netaji Subhash Chandra Bose Medical College. <button onClick={()=>setShowDetails(!showDetails)} className='border-0 bg-white fw-bolder'>Show {`${!showDetails ?'More':'Less'}`}</button></p>
            {showDetails && <div className='row mb-4'>
                <div className='col-12 col-md-5 mb-2 rounded mx-auto d-flex flex-column doctorMoreSection'>
                <h3 className='m-2 mb-5'>Experience</h3>
                <div className='d-flex mb-2'>
                    <div className='col-2 col-lg-2 text-center '><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMYSURBVHgBzZmxUttAEIZXxg2dQ0vjzNAyOA0toqNMWpokPYPtJ4hCSxEZaJmQJ6Cli/0GZmiZiVLQEnVU4Py/dOeRZUk+SYfNN3OWrTvJv3bv9u5WjlSk15u4Ly+y4zji4mcHpaUKCVEClslEbhsNGfq+M5QKOGUaQ1QLoroQ1UuIMSVAGeLa7xAbmF5kJJDCYIlv/Cp2uDIVulDg8fGEFvOkvMUWQfd7Z2fOr6JGhQK73ckPsWe1PPzBwOnnVWYKVC69xldXlsMYXtqHy8N0RSOrNcT9luWJIx1lkDnmBCq3dmT5uOq/Z5hxMVz7BU/yU1YIwlj//Nzx9e+pQIhrK9e2ZbWE6I/vdX+cuhjKPVm9OKJjbkRkQWW9P1KSjQ2Rw0ORra3s+sdHkYuL+FgWWPEdrRhZUFmvNNvb+eIIH2BvTyoBTVH8bfIDaivdZn09Pj48iFynggSF8QF0m7JAUxcHz+GqRA2OhWiL6D/d3IzL05PI3d1sW1qW7ene+/v4HNuNRuYuZ/BuwpSuY7imOTqK/zQNBe/uSu5DJev4/eQkFruI52fpNCBuRwzJElcWPoyp27nW5CBpiyXYF7U7bUDjWRPIfnV6GocViyJbFGh7nWeTVlNqwtGbDjGXl3E/OzjIHzymUCDnvMpW5GhMhw2eyzpfgbC2QMY7TncUpC1Jy3HEF80yhgTsg2OpgY5znDU0FMZzdcMSJpC/DNQj7Fs/Sk2SwdpGvFSMm2trMobS2lAgXW0TbvgbascfmlxgMj1ZvE9AbdFyCxYcmFzBib4uNzfGAof80AtWrmL/yRtCLfujUSxcuZpacUlc6bTIdE+CDumJYV98ZQLmbfSPqUBaMVmxKpivSSaVZjbuqPBX6WoYaJBOJmWupbHDX3bqg4yRRPqQPpmZm8GTfJKaU2BJmNjcz6oo3I0gN+ir3dWrQbeia+Wm+BpFF6M/9HCDrxKnb23DQdkvEkdMU8Btbu5xw89iAVoNBy8rHzjXVkqQEMqNflvKESphvokwTSmBSdRrCFdtW9uqJF9DsHClNMQkcFv1NcR/p4gbURaPf1UAAAAASUVORK5CYII="/></div>
                    <div className='col '>
                        <h5 className='fw-bolder'>Clinical Observer</h5>
                        <p>Boston Medical Center (BMC), Sexual Medicine Department</p>
                        <p className='text-muted'>since 2013</p>
                    </div>
                    </div>
                    
                    <div className='d-flex mb-2'>
                    <div className='col-2 col-lg-2 text-center '><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMYSURBVHgBzZmxUttAEIZXxg2dQ0vjzNAyOA0toqNMWpokPYPtJ4hCSxEZaJmQJ6Cli/0GZmiZiVLQEnVU4Py/dOeRZUk+SYfNN3OWrTvJv3bv9u5WjlSk15u4Ly+y4zji4mcHpaUKCVEClslEbhsNGfq+M5QKOGUaQ1QLoroQ1UuIMSVAGeLa7xAbmF5kJJDCYIlv/Cp2uDIVulDg8fGEFvOkvMUWQfd7Z2fOr6JGhQK73ckPsWe1PPzBwOnnVWYKVC69xldXlsMYXtqHy8N0RSOrNcT9luWJIx1lkDnmBCq3dmT5uOq/Z5hxMVz7BU/yU1YIwlj//Nzx9e+pQIhrK9e2ZbWE6I/vdX+cuhjKPVm9OKJjbkRkQWW9P1KSjQ2Rw0ORra3s+sdHkYuL+FgWWPEdrRhZUFmvNNvb+eIIH2BvTyoBTVH8bfIDaivdZn09Pj48iFynggSF8QF0m7JAUxcHz+GqRA2OhWiL6D/d3IzL05PI3d1sW1qW7ene+/v4HNuNRuYuZ/BuwpSuY7imOTqK/zQNBe/uSu5DJev4/eQkFruI52fpNCBuRwzJElcWPoyp27nW5CBpiyXYF7U7bUDjWRPIfnV6GocViyJbFGh7nWeTVlNqwtGbDjGXl3E/OzjIHzymUCDnvMpW5GhMhw2eyzpfgbC2QMY7TncUpC1Jy3HEF80yhgTsg2OpgY5znDU0FMZzdcMSJpC/DNQj7Fs/Sk2SwdpGvFSMm2trMobS2lAgXW0TbvgbascfmlxgMj1ZvE9AbdFyCxYcmFzBib4uNzfGAof80AtWrmL/yRtCLfujUSxcuZpacUlc6bTIdE+CDumJYV98ZQLmbfSPqUBaMVmxKpivSSaVZjbuqPBX6WoYaJBOJmWupbHDX3bqg4yRRPqQPpmZm8GTfJKaU2BJmNjcz6oo3I0gN+ir3dWrQbeia+Wm+BpFF6M/9HCDrxKnb23DQdkvEkdMU8Btbu5xw89iAVoNBy8rHzjXVkqQEMqNflvKESphvokwTSmBSdRrCFdtW9uqJF9DsHClNMQkcFv1NcR/p4gbURaPf1UAAAAASUVORK5CYII="/></div>
                    <div className='col '>
                        <h5 className='fw-bolder'>Clinical Trainee</h5>
                        <p>Betty Dodson; American Sex Educator New York, USA</p>
                        <p className='text-muted'>Since 2006</p>
                    </div>
                    </div>

                    <div className='d-flex mb-2'>
                    <div className='col-2 col-lg-2 text-center '><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMYSURBVHgBzZmxUttAEIZXxg2dQ0vjzNAyOA0toqNMWpokPYPtJ4hCSxEZaJmQJ6Cli/0GZmiZiVLQEnVU4Py/dOeRZUk+SYfNN3OWrTvJv3bv9u5WjlSk15u4Ly+y4zji4mcHpaUKCVEClslEbhsNGfq+M5QKOGUaQ1QLoroQ1UuIMSVAGeLa7xAbmF5kJJDCYIlv/Cp2uDIVulDg8fGEFvOkvMUWQfd7Z2fOr6JGhQK73ckPsWe1PPzBwOnnVWYKVC69xldXlsMYXtqHy8N0RSOrNcT9luWJIx1lkDnmBCq3dmT5uOq/Z5hxMVz7BU/yU1YIwlj//Nzx9e+pQIhrK9e2ZbWE6I/vdX+cuhjKPVm9OKJjbkRkQWW9P1KSjQ2Rw0ORra3s+sdHkYuL+FgWWPEdrRhZUFmvNNvb+eIIH2BvTyoBTVH8bfIDaivdZn09Pj48iFynggSF8QF0m7JAUxcHz+GqRA2OhWiL6D/d3IzL05PI3d1sW1qW7ene+/v4HNuNRuYuZ/BuwpSuY7imOTqK/zQNBe/uSu5DJev4/eQkFruI52fpNCBuRwzJElcWPoyp27nW5CBpiyXYF7U7bUDjWRPIfnV6GocViyJbFGh7nWeTVlNqwtGbDjGXl3E/OzjIHzymUCDnvMpW5GhMhw2eyzpfgbC2QMY7TncUpC1Jy3HEF80yhgTsg2OpgY5znDU0FMZzdcMSJpC/DNQj7Fs/Sk2SwdpGvFSMm2trMobS2lAgXW0TbvgbascfmlxgMj1ZvE9AbdFyCxYcmFzBib4uNzfGAof80AtWrmL/yRtCLfujUSxcuZpacUlc6bTIdE+CDumJYV98ZQLmbfSPqUBaMVmxKpivSSaVZjbuqPBX6WoYaJBOJmWupbHDX3bqg4yRRPqQPpmZm8GTfJKaU2BJmNjcz6oo3I0gN+ir3dWrQbeia+Wm+BpFF6M/9HCDrxKnb23DQdkvEkdMU8Btbu5xw89iAVoNBy8rHzjXVkqQEMqNflvKESphvokwTSmBSdRrCFdtW9uqJF9DsHClNMQkcFv1NcR/p4gbURaPf1UAAAAASUVORK5CYII="/></div>
                    <div className='col '>
                        <h5 className='fw-bolder'>Clinical Observer</h5>
                        <p>Boston Medical Center (BMC), Sexual Medicine Department</p>
                        <p className='text-muted'>since 2013</p>
                    </div>
                    </div>
                    
                </div>
                <div className='col-12 col-md-5 mb-2 mx-auto rounded d-flex flex-column doctorMoreSection'>
                <h3 className='m-2 mb-5'>Awards & Affiliations</h3>
                    <div className='d-flex mb-2'>
                    <div className='col-2 col-lg-2  text-center'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMYSURBVHgBzZmxUttAEIZXxg2dQ0vjzNAyOA0toqNMWpokPYPtJ4hCSxEZaJmQJ6Cli/0GZmiZiVLQEnVU4Py/dOeRZUk+SYfNN3OWrTvJv3bv9u5WjlSk15u4Ly+y4zji4mcHpaUKCVEClslEbhsNGfq+M5QKOGUaQ1QLoroQ1UuIMSVAGeLa7xAbmF5kJJDCYIlv/Cp2uDIVulDg8fGEFvOkvMUWQfd7Z2fOr6JGhQK73ckPsWe1PPzBwOnnVWYKVC69xldXlsMYXtqHy8N0RSOrNcT9luWJIx1lkDnmBCq3dmT5uOq/Z5hxMVz7BU/yU1YIwlj//Nzx9e+pQIhrK9e2ZbWE6I/vdX+cuhjKPVm9OKJjbkRkQWW9P1KSjQ2Rw0ORra3s+sdHkYuL+FgWWPEdrRhZUFmvNNvb+eIIH2BvTyoBTVH8bfIDaivdZn09Pj48iFynggSF8QF0m7JAUxcHz+GqRA2OhWiL6D/d3IzL05PI3d1sW1qW7ene+/v4HNuNRuYuZ/BuwpSuY7imOTqK/zQNBe/uSu5DJev4/eQkFruI52fpNCBuRwzJElcWPoyp27nW5CBpiyXYF7U7bUDjWRPIfnV6GocViyJbFGh7nWeTVlNqwtGbDjGXl3E/OzjIHzymUCDnvMpW5GhMhw2eyzpfgbC2QMY7TncUpC1Jy3HEF80yhgTsg2OpgY5znDU0FMZzdcMSJpC/DNQj7Fs/Sk2SwdpGvFSMm2trMobS2lAgXW0TbvgbascfmlxgMj1ZvE9AbdFyCxYcmFzBib4uNzfGAof80AtWrmL/yRtCLfujUSxcuZpacUlc6bTIdE+CDumJYV98ZQLmbfSPqUBaMVmxKpivSSaVZjbuqPBX6WoYaJBOJmWupbHDX3bqg4yRRPqQPpmZm8GTfJKaU2BJmNjcz6oo3I0gN+ir3dWrQbeia+Wm+BpFF6M/9HCDrxKnb23DQdkvEkdMU8Btbu5xw89iAVoNBy8rHzjXVkqQEMqNflvKESphvokwTSmBSdRrCFdtW9uqJF9DsHClNMQkcFv1NcR/p4gbURaPf1UAAAAASUVORK5CYII="/></div>
                    <div className='col '>
                        <h5 className='fw-bolder'>Diplomate</h5>
                        <p>American board of sexology</p>
                        <p className='text-muted'>2022</p>
                    </div>
                    </div>

                    <div className='d-flex mb-2'>
                    <div className='col-2 col-lg-2  text-center'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMYSURBVHgBzZmxUttAEIZXxg2dQ0vjzNAyOA0toqNMWpokPYPtJ4hCSxEZaJmQJ6Cli/0GZmiZiVLQEnVU4Py/dOeRZUk+SYfNN3OWrTvJv3bv9u5WjlSk15u4Ly+y4zji4mcHpaUKCVEClslEbhsNGfq+M5QKOGUaQ1QLoroQ1UuIMSVAGeLa7xAbmF5kJJDCYIlv/Cp2uDIVulDg8fGEFvOkvMUWQfd7Z2fOr6JGhQK73ckPsWe1PPzBwOnnVWYKVC69xldXlsMYXtqHy8N0RSOrNcT9luWJIx1lkDnmBCq3dmT5uOq/Z5hxMVz7BU/yU1YIwlj//Nzx9e+pQIhrK9e2ZbWE6I/vdX+cuhjKPVm9OKJjbkRkQWW9P1KSjQ2Rw0ORra3s+sdHkYuL+FgWWPEdrRhZUFmvNNvb+eIIH2BvTyoBTVH8bfIDaivdZn09Pj48iFynggSF8QF0m7JAUxcHz+GqRA2OhWiL6D/d3IzL05PI3d1sW1qW7ene+/v4HNuNRuYuZ/BuwpSuY7imOTqK/zQNBe/uSu5DJev4/eQkFruI52fpNCBuRwzJElcWPoyp27nW5CBpiyXYF7U7bUDjWRPIfnV6GocViyJbFGh7nWeTVlNqwtGbDjGXl3E/OzjIHzymUCDnvMpW5GhMhw2eyzpfgbC2QMY7TncUpC1Jy3HEF80yhgTsg2OpgY5znDU0FMZzdcMSJpC/DNQj7Fs/Sk2SwdpGvFSMm2trMobS2lAgXW0TbvgbascfmlxgMj1ZvE9AbdFyCxYcmFzBib4uNzfGAof80AtWrmL/yRtCLfujUSxcuZpacUlc6bTIdE+CDumJYV98ZQLmbfSPqUBaMVmxKpivSSaVZjbuqPBX6WoYaJBOJmWupbHDX3bqg4yRRPqQPpmZm8GTfJKaU2BJmNjcz6oo3I0gN+ir3dWrQbeia+Wm+BpFF6M/9HCDrxKnb23DQdkvEkdMU8Btbu5xw89iAVoNBy8rHzjXVkqQEMqNflvKESphvokwTSmBSdRrCFdtW9uqJF9DsHClNMQkcFv1NcR/p4gbURaPf1UAAAAASUVORK5CYII="/></div>
                    <div className='col '>
                        <h5 className='fw-bolder'>Clinical Observer</h5>
                        <p>Boston Medical Center (BMC), Sexual Medicine Department</p>
                        <p className='text-muted'>since 2013</p>
                    </div>
                    </div>

                    <div className='d-flex mb-2'>
                    <div className='col-2 col-lg-2  text-center'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMYSURBVHgBzZmxUttAEIZXxg2dQ0vjzNAyOA0toqNMWpokPYPtJ4hCSxEZaJmQJ6Cli/0GZmiZiVLQEnVU4Py/dOeRZUk+SYfNN3OWrTvJv3bv9u5WjlSk15u4Ly+y4zji4mcHpaUKCVEClslEbhsNGfq+M5QKOGUaQ1QLoroQ1UuIMSVAGeLa7xAbmF5kJJDCYIlv/Cp2uDIVulDg8fGEFvOkvMUWQfd7Z2fOr6JGhQK73ckPsWe1PPzBwOnnVWYKVC69xldXlsMYXtqHy8N0RSOrNcT9luWJIx1lkDnmBCq3dmT5uOq/Z5hxMVz7BU/yU1YIwlj//Nzx9e+pQIhrK9e2ZbWE6I/vdX+cuhjKPVm9OKJjbkRkQWW9P1KSjQ2Rw0ORra3s+sdHkYuL+FgWWPEdrRhZUFmvNNvb+eIIH2BvTyoBTVH8bfIDaivdZn09Pj48iFynggSF8QF0m7JAUxcHz+GqRA2OhWiL6D/d3IzL05PI3d1sW1qW7ene+/v4HNuNRuYuZ/BuwpSuY7imOTqK/zQNBe/uSu5DJev4/eQkFruI52fpNCBuRwzJElcWPoyp27nW5CBpiyXYF7U7bUDjWRPIfnV6GocViyJbFGh7nWeTVlNqwtGbDjGXl3E/OzjIHzymUCDnvMpW5GhMhw2eyzpfgbC2QMY7TncUpC1Jy3HEF80yhgTsg2OpgY5znDU0FMZzdcMSJpC/DNQj7Fs/Sk2SwdpGvFSMm2trMobS2lAgXW0TbvgbascfmlxgMj1ZvE9AbdFyCxYcmFzBib4uNzfGAof80AtWrmL/yRtCLfujUSxcuZpacUlc6bTIdE+CDumJYV98ZQLmbfSPqUBaMVmxKpivSSaVZjbuqPBX6WoYaJBOJmWupbHDX3bqg4yRRPqQPpmZm8GTfJKaU2BJmNjcz6oo3I0gN+ir3dWrQbeia+Wm+BpFF6M/9HCDrxKnb23DQdkvEkdMU8Btbu5xw89iAVoNBy8rHzjXVkqQEMqNflvKESphvokwTSmBSdRrCFdtW9uqJF9DsHClNMQkcFv1NcR/p4gbURaPf1UAAAAASUVORK5CYII="/></div>
                    <div className='col '>
                        <h5 className='fw-bolder'>Clinical Observer</h5>
                        <p>Boston Medical Center (BMC), Sexual Medicine Department</p>
                        <p className='text-muted'>since 2013</p>
                    </div>
                    </div>
                    
                </div>
                <div className='row my-3   '>
                <div className='col rounded doctorMoreSection'>
                <h3 className='m-3'>Availabilities</h3>
                <div className='col-12  d-flex my-3'>
                    <div className='col col-lg-3'><p className='fw-bolder text-center'>Monday</p></div>
                    <div className='col col-lg-9'><p className='fw-bolder'>10:00 AM - 10.30 AM  &  02:00 PM - 04:45 PM</p></div>
                </div>
                <div className='col-12  d-flex my-3'>
                    <div className='col col-lg-3'><p className='fw-bolder text-center'>Tuesday</p></div>
                    <div className='col col-lg-9'><p className='fw-bolder'>10:00 AM - 10.30 AM  &  02:00 PM - 04:45 PM</p></div>
                </div>

                <div className='col-12  d-flex my-3'>
                    <div className='col col-lg-3'><p className='fw-bolder text-center'>Wednesday</p></div>
                    <div className='col col-lg-9'><p className='fw-bolder'>10:00 AM - 10.30 AM  &  02:00 PM - 04:45 PM</p></div>
                </div>
                <div className='col-12  d-flex my-3'>
                    <div className='col col-lg-3'><p className='fw-bolder text-center'>Thursday</p></div>
                    <div className='col col-lg-9'><p className='fw-bolder'>10:00 AM - 10.30 AM  &  02:00 PM - 04:45 PM</p></div>
                </div>
                <div className='col-12  d-flex my-3'>
                    <div className='col col-lg-3'><p className='fw-bolder text-center'>Friday</p></div>
                    <div className='col col-lg-9'><p className='fw-bolder'>10:00 AM - 10.30 AM  &  02:00 PM - 04:45 PM</p></div>
                </div>
                <div className='col-12  d-flex my-3'>
                    <div className='col col-lg-3'><p className='fw-bolder text-center'>Saturday</p></div>
                    <div className='col col-lg-9'><p className='fw-bolder'>10:00 AM - 10.30 AM  &  02:00 PM - 04:45 PM</p></div>
                </div>
                </div>
                </div>
                <hr/>
            </div>}
            <DoctorData/>
            </div>
            <div className="col-12 col-lg-4">
                <div className='border shadow'>
                    <p className='px-4 pt-4'>"Sexual health encompasses a plethora of sexual problems. The stigmas associated with it limit people from seeking help.I urge people to educate themselves about intimacy-related issues and seek holistic treatment, which involves a combination of both medical and psychological approaches."</p>
                    <h5 className='p-4'>Dr.Anita Shyam</h5>
                </div>
            </div>
        
        </div>
    </div>
  )
}

export default DoctorAbout