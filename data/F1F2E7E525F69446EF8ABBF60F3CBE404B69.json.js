GS.dataCache['F1F2E7E525F69446EF8ABBF60F3CBE404B69'] = {
    "uid": "F1F2E7E525F69446EF8ABBF60F3CBE404B69",
    "isLoaded": true,
    "lastModificationTime": null,
    "items": {
        "type": "vn.scene",
        "name": "Pantalla de carga",
        "parentId": "46C936D6411C874C713BCAB76EDA3BF00B4E",
        "localizableStrings": {},
        "chapterUid": "46C936D6411C874C713BCAB76EDA3BF00B4E",
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
                "uid": "5ECA904E55AF0746937802664526891BA58B",
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
                "uid": "239CB76736C9D54FD57B0435638F64CD0E2B",
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
                "uid": "8F3E1A0408CD334E2F5A90D222F30F1D484A",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "gs.WaitCommand",
                "params": {
                    "time": 300
                },
                "uid": "8F0E918C8439644B0C3A97F3BECAB6C60007",
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
                "uid": "43796446177A244DC43994C594C9C5049F9F",
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
                "uid": "61D1924D6A4CD3487F299F14424AFAD98DB7",
                "indent": 0
            },
            {
                "id": "vn.ChangeScene",
                "params": {
                    "scene": {
                        "uid": "D67BE27503BFE74C2629AF06F0F7BA039BE7",
                        "name": "presentación de capítulo"
                    },
                    "savePrevious": 0,
                    "erasePictures": 0,
                    "eraseTexts": 0,
                    "eraseVideos": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "42A66D0F69C78344F50B49C3795DA37634D8",
                "indent": 0
            }
        ],
        "livePreviewDisabled": false,
        "order": 0
    },
    "summary": [
        "name",
        "type",
        "parentId",
        "o",
        "chapterUid",
        "order"
    ],
    "externalItems": []
}