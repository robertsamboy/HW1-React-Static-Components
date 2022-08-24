



class Side extends React.Component {
    render(){
        return(
            <aside><nav>
                    <a>Dashboard </a>
                    <a>Widget</a>
                    <a>Reviews</a>
                    <a>Customers</a>
                    <a>Online Analysis</a>
                    <a> Settings</a>
                    </nav>
                     </aside>
        )
    }
}

class Reviews extends React.Component {
    render(){
        return(
          <section>Reviews 1281</section>
        )
    }
}
class AvgRating extends React.Component {
    render(){
        return(
          <section>Average Rating</section>
        )
    }
}
class Sentiment extends React.Component {
    render(){
        return(
          <section>Sentiment Analysis</section>
        )
    }
}
class Web extends React.Component {
    render(){
        return(
          <section id ="large">Website Visitors 
            <div>821</div>
          </section>
        )
    }
}


class App extends React.Component {
    render() {
        return (
            <div id="app">
            <Side />
            <div id = "container">
            <div id ="top">
        
            <Reviews />
            <AvgRating />
            <Sentiment />
            </div>
            
            <Web />
            </div>
            </div>

        )
    }
}



ReactDOM.render(
   <App />,
    document.querySelector('main')
  )