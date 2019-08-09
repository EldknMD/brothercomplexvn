GS.dataCache['1854BBD39923E84E3E1AABB466D7CFAF4806'] = {
    "uid": "1854BBD39923E84E3E1AABB466D7CFAF4806",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Pantalla de carga",
        "type": "vn.scene",
        "parentId": "AB3FC2A69226A54ADB19C2774904972C42E1",
        "chapterUid": "AB3FC2A69226A54ADB19C2774904972C42E1",
        "order": 0,
        "localizableStrings": {},
        "commands": [
            {
                "id": "vn.ChangeBackground",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "graphic": {
                        "name": "fondo gris carga",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        }
                    },
                    "layer": 0,
                    "duration": 60,
                    "waitForCompletion": 0,
                    "blendMode": 0,
                    "origin": 0,
                    "zOrder": -1,
                    "loopVertical": 0,
                    "loopHorizontal": 0,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 0,
                        "easing.type": 1,
                        "animation.type": 1,
                        "origin": 1,
                        "zOrder": 0,
                        "blendMode": 1,
                        "viewport.type": 1,
                        "loopVertical": 1,
                        "loopHorizontal": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "37E7A06966B9104EA3191AE1E3DE09972BAE",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "gs.ShowVideo",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "viewport": {
                        "type": "scene"
                    },
                    "predefinedPositionId": 1,
                    "positionType": 0,
                    "number": 10,
                    "blendMode": 0,
                    "duration": 60,
                    "waitForCompletion": 0,
                    "origin": 0,
                    "zOrder": 0,
                    "video": {
                        "name": "loading",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        },
                        "volume": 100,
                        "playbackRate": 100
                    },
                    "position": {
                        "x": 0,
                        "y": 0
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "loop": 1,
                    "fieldFlags": {
                        "duration": 0
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "C7648F348FAA8346B20A1B8978B1B6150E6C",
                "indent": 0
            },
            {
                "id": "gs.ShowVideo",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "viewport": {
                        "type": "scene"
                    },
                    "predefinedPositionId": 8,
                    "positionType": 0,
                    "number": 0,
                    "blendMode": 0,
                    "duration": 60,
                    "waitForCompletion": 0,
                    "origin": 0,
                    "zOrder": 0,
                    "video": {
                        "name": "rose corriendo color sin fondo",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        },
                        "volume": 100,
                        "playbackRate": 100
                    },
                    "position": {
                        "x": 900,
                        "y": 235
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "loop": 1,
                    "fieldFlags": {
                        "duration": 0,
                        "easing.type": 1,
                        "animation.type": 1,
                        "origin": 1,
                        "zOrder": 1,
                        "blendMode": 1,
                        "viewport.type": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "A559514E203C754F273A0869498BBA3126CB",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "gs.WaitCommand",
                "params": {
                    "time": 300
                },
                "uid": "6BC5AE8686167943610845B7EDFDBBAFF67D",
                "indent": 0
            },
            {
                "id": "vn.BlendBackground",
                "params": {
                    "number": 0,
                    "duration": 60,
                    "waitForCompletion": 0,
                    "opacity": 0,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    }
                },
                "uid": "E0B662643B60854A0D385291870BB1F3613D",
                "indent": 0
            },
            {
                "id": "gs.EraseVideo",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "number": 0,
                    "duration": 60,
                    "waitForCompletion": 0,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 0
                    }
                },
                "uid": "4695485521C87048B189F0574B571B25812E",
                "indent": 0
            },
            {
                "id": "gs.EraseVideo",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "number": 10,
                    "duration": 60,
                    "waitForCompletion": 1,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 0
                    }
                },
                "uid": "2145F1965AB5824DA49A20A7EF97A39FC968",
                "indent": 0
            },
            {
                "id": "vn.ChangeScene",
                "params": {
                    "scene": {
                        "uid": "3F9B682C991D184A585889594E68F35D28E3",
                        "name": "Presentación capítulo"
                    },
                    "savePrevious": 0,
                    "erasePictures": 0,
                    "eraseTexts": 0,
                    "eraseVideos": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "4EABCD107A9D864B8A5B8094B294582CEBBC",
                "indent": 0
            }
        ],
        "livePreviewDisabled": false
    },
    "summary": [
        "name",
        "type",
        "parentId",
        "chapterUid",
        "order"
    ],
    "externalItems": []
}