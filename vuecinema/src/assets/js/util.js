import moviesjson from '@/assets/json/movies.json'

const util = {
    // 获取数据中-横版图
    getLateral() {
        return moviesjson
            .map((n) => {
                if (n.lateral) return n
            })
            .filter((n) => n)
    },
    // 获取数据中-竖版图
    getPortrait() {
        return moviesjson
            .map((n) => {
                if (!n.lateral || n.lateral == false) return n
            })
            .filter((n) => n)
    }
}

export default util
