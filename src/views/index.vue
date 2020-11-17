<template>
  
  <my-map 
    height="66rem"
    :zoom="10"
    :adapter="defaultAdapter"
    :center="[116.478928, 39.497761]">
    <my-map-layers :layers="layers2" placement="right-top" :margin="10"></my-map-layers>
    <my-map-layers :layers="layers" placement="right-bottom" :margin="10"></my-map-layers>

    <!-- <my-map-flight
        v-for="n in 20"
        :key="n"
        :from="[116.683729, 39.166113]"
        :to="getCoordinate()"
        :radius="0.2"
        :space="0.01"
        :line-effect="false"
        :delay="5000 * Math.random()"
        :point-effect="pointEffect"
        arrow>
    </my-map-flight> -->

    <my-map-scatter
        v-for="n in 50"
        :key="n"
        :coordinate="getCoordinate()"
        :delay="Math.random() * 5000">
    </my-map-scatter>

    <my-map-track
        :coordinates="coordinates" 
        :period="20" 
        :effect="effect">
    </my-map-track>
    <my-map-track
        :coordinates="coordinates2" 
        :period="20" 
        :effect="effect">
    </my-map-track>
  </my-map>
</template>

<script>
import Baidu from '$ui/map/sources/preview/Baidu.png'
import Amap from '$ui/map/sources/preview/Amap.png'
import OSM from '$ui/map/sources/preview/OSM.png'
import TDT from '$ui/map/sources/preview/TDT.png'

import ChinaOnlineCommunity from "@/assets/ChinaOnlineCommunity.png"
import ChinaOnlineCommunityENG from "@/assets/ChinaOnlineCommunityENG.png"
import ChinaOnlineStreetGray from "@/assets/ChinaOnlineStreetGray.png"
import ChinaOnlineStreetWarm from "@/assets/ChinaOnlineStreetWarm.png"
import ChinaOnlineStreetPurplishBlue from "@/assets/ChinaOnlineStreetPurplishBlue.png"

import plane from '$ui/map/sources/arrows/plane.svg'
import createArrow from '$ui/map/utils/arrow'
import {coordinateEqual} from '$ui/map/utils/util'

import car from '$ui/map/sources/arrows/car.png'
const PREVIEW_IMAGES = {
    ChinaOnlineCommunity,
    ChinaOnlineCommunityENG,
    ChinaOnlineStreetGray,
    ChinaOnlineStreetWarm,
    ChinaOnlineStreetPurplishBlue
}
export default {
    data() {
        return {
            layers: null,
            defaultAdapter: null,
            layers2: [
                {
                    title: '天地图',
                    adapter: 'TDT',
                    preview: TDT
                },
                {
                    title: '百度',
                    adapter: 'Baidu',
                    preview: Baidu
                },
                {
                    title: '高德',
                    adapter: 'Amap',
                    preview: Amap
                },
                {
                    title: 'OSM',
                    adapter: 'OSM',
                    preview: OSM
                }

            ],
            coordinates: [
                [116.478928, 39.997761],
                [116.478907, 39.998422],
                [116.479384, 39.998546],
                [116.481053, 39.998204],
                [116.481793, 39.997868],
                [116.482898, 39.998217],
                [116.483789, 39.999063],
                [116.484674, 39.999844]
            ],
            coordinates2: [
                [116.478928, 39.697761],
                [116.478907, 39.698422],
                [116.479384, 39.688546],
                [116.481053, 39.697204],
                [116.481793, 39.698868],
                [116.482898, 39.698317],
                [116.483789, 39.699763],
                [116.484674, 39.699244]
            ],
            effect: car
        }
    },
    methods: {
      createLayers() {
        const layers = {
          ChinaOnlineStreetPurplishBlue: '蓝黑版',
          ChinaOnlineCommunity: '彩色版',
          ChinaOnlineCommunityENG: '彩色英文版',
          ChinaOnlineStreetGray: '灰色版',
          ChinaOnlineStreetWarm: '暖色版',
        }
        const url = 'https://map.geoq.cn/ArcGIS/rest/services/{name}/MapServer/tile/{z}/{y}/{x}'
        return Object.entries(layers).map(([name, title]) => {
          return {
            title: title,
            adapter: {
              type: 'XYZ',
              url: url.replace('{name}', name)
            },
            preview: PREVIEW_IMAGES[name]
          }
        })
      },
      getCoordinate() {
        return [
          116 + Math.random() - Math.random(),
          39 + Math.random() - Math.random()
        ]
      },
      pointEffect({fraction, coordinates, coordinate}) {
        let start = coordinates[fraction - 1] || coordinate
        // 防止相邻的2个点相同，出现抖动
        if (coordinateEqual(start, coordinate)) {
          start = coordinates[fraction - 2] || coordinate
        }
        return createArrow(start, coordinate, {
          src: plane,
          color: '#409eff',
          scale: 1.5
        })
      }
    },
    created() {
      this.layers = this.createLayers()
      this.defaultAdapter = this.layers[0].adapter
    }
}
</script>
