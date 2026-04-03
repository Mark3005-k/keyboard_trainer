function StatsPannel({time, mistakes, speed, accuracy}){
return (
    <div className="statsPannel">
        <div className="Stats">
        <p className="stats-label">Час</p>
        <p className="stats-value">{time}</p>
        </div>
        <div className="Stats">
        <p className="stats-label">Помилки</p>
        <p className="stats-value">{mistakes}</p>
        </div>
        <div className="Stats">
        <p className="stats-label">Швидкість</p>
        <p className="stats-value">{speed}символів/хв</p>
        </div>
        <div className="Stats">
        <p className="stats-label">Точність</p>
        <p className="stats-value">{accuracy}%</p>
        </div>
    </div>
)
}
export default StatsPannel