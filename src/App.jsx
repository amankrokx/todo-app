import React from 'react'
import './App.css'
import tower from './assets/tower.png'
import Header from './components/Header/index.jsx'

function App() {

  return (
      <>
        <section className="top">
            <Header time="Afternoon" />

            <section class="weather">
                <div class="cloud">
                    <span class="material-icons">ac_unit</span>
                </div>
                <div class="info">
                    <div class="temperature">
                        25°
                        <span>C</span>
                    </div>
                    <div class="city">Bengaluru, Karnataka</div>
                    <div class="activity-info">
                        <span class="material-icons">task_alt</span>
                        <span>Activities 4/10</span>
                    </div>
                </div>
            </section>

            <img src={tower} alt="" class="tower" loading="lazy" height="220px" width="110" />

            <nav>
                <ul>
                    <li class="">
                        <span>SUN</span>
                        <span>5</span>
                    </li>
                    <li>
                        <span>MON</span>
                        <span>6</span>
                    </li>
                    <li>
                        <span>TUE</span>
                        <span>7</span>
                    </li>
                    <li class="active">
                        <span>WED</span>
                        <span>8</span>
                    </li>
                    <li>
                        <span>THU</span>
                        <span>9</span>
                    </li>
                    <li>
                        <span>FRI</span>
                        <span>10</span>
                    </li>
                    <li>
                        <span>SAT</span>
                        <span>11</span>
                    </li>
                    <li>
                        <span>MON</span>
                        <span>6</span>
                    </li>
                    <li>
                        <span>TUE</span>
                        <span>7</span>
                    </li>
                    <li>
                        <span>WED</span>
                        <span>8</span>
                    </li>
                    <li>
                        <span>THU</span>
                        <span>9</span>
                    </li>
                    <li>
                        <span>FRI</span>
                        <span>10</span>
                    </li>
                    <li>
                        <span>SAT</span>
                        <span>11</span>
                    </li>
                </ul>
            </nav>
        </section>

        <section className="bottom">
            <h5>Activities</h5>
            <div class="cards">
                <div class="card">
                    <div class="icon">
                        <span class="material-icons">sports_soccer</span>
                    </div>
                    <div class="info">
                        <div class="title">
                            <span>Basketball Match</span>
                            <span>5.30 am - 6.30 am</span>
                        </div>
                        <div class="note">Lorem ipsum dolor sit amet.</div>
                        <div class="pill">
                            <span class="material-icons">radio_button_checked</span>
                            Sport
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="icon">
                        <span class="material-icons">sports_soccer</span>
                    </div>
                    <div class="info">
                        <div class="title">
                            <span>Basketball Match</span>
                            <span>5.30 am - 6.30 am</span>
                        </div>
                        <div class="note">Lorem ipsum dolor sit amet.</div>
                        <div class="pill">
                            <span class="material-icons">radio_button_checked</span>
                            Sport
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="icon">
                        <span class="material-icons">sports_soccer</span>
                    </div>
                    <div class="info">
                        <div class="title">
                            <span>Basketball Match</span>
                            <span>5.30 am - 6.30 am</span>
                        </div>
                        <div class="note">Lorem ipsum dolor sit amet.</div>
                        <div class="pill">
                            <span class="material-icons">radio_button_checked</span>
                            Sport
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="icon">
                        <span class="material-icons">sports_soccer</span>
                    </div>
                    <div class="info">
                        <div class="title">
                            <span>Basketball Match</span>
                            <span>5.30 am - 6.30 am</span>
                        </div>
                        <div class="note">Lorem ipsum dolor sit amet.</div>
                        <div class="pill">
                            <span class="material-icons">radio_button_checked</span>
                            Sport
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="icon">
                        <span class="material-icons">sports_soccer</span>
                    </div>
                    <div class="info">
                        <div class="title">
                            <span>Basketball Match</span>
                            <span>5.30 am - 6.30 am</span>
                        </div>
                        <div class="note">Lorem ipsum dolor sit amet.</div>
                        <div class="pill">
                            <span class="material-icons">radio_button_checked</span>
                            Sport
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="icon">
                        <span class="material-icons">sports_soccer</span>
                    </div>
                    <div class="info">
                        <div class="title">
                            <span>Basketball Match</span>
                            <span>5.30 am - 6.30 am</span>
                        </div>
                        <div class="note">Lorem ipsum dolor sit amet.</div>
                        <div class="pill">
                            <span class="material-icons">radio_button_checked</span>
                            Sport
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="icon">
                        <span class="material-icons">sports_soccer</span>
                    </div>
                    <div class="info">
                        <div class="title">
                            <span>Basketball Match</span>
                            <span>5.30 am - 6.30 am</span>
                        </div>
                        <div class="note">Lorem ipsum dolor sit amet.</div>
                        <div class="pill">
                            <span class="material-icons">radio_button_checked</span>
                            Sport
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </>
  )
}

export default App
