GS.dataCache['D598AE9A854F3646401846D7A55787FEE4DA'] = {
    "uid": "D598AE9A854F3646401846D7A55787FEE4DA",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Pantalla de carga",
        "type": "vn.scene",
        "parentId": "CB41E82F252DC9491359830887DF81F590ED",
        "chapterUid": "CB41E82F252DC9491359830887DF81F590ED",
        "order": 0,
        "localizableStrings": {
            "480206236AA2C54F0898F5F23FD9605BED13": {
                "t": "N o w  l o a d i n g . . . ",
                "d": null
            }
        },
        "commands": [
            {
                "id": "vn.ChangeBackground",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "graphic": {
                        "name": "fondo blanco",
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
                    "zOrder": 0,
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
                        "duration": 0
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "EBCA3E8428E6954DAD3B0417FDED02558ABE",
                "indent": 0
            },
            {
                "id": "gs.ShowVideo",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "viewport": {
                        "type": "scene"
                    },
                    "predefinedPositionId": 4,
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
                "uid": "3BDF0E796BD9454E612B3121F5B18096F792",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "gs.MoveVideo",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "predefinedPositionId": 4,
                    "positionType": 0,
                    "number": 0,
                    "duration": 0,
                    "waitForCompletion": 0,
                    "picture": {
                        "position": {
                            "x": 0,
                            "y": 0
                        }
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    }
                },
                "uid": "EB95612843A575430E1831C2B80A4DE910A1",
                "indent": 0
            },
            {
                "id": "gs.ChangeTextSettings",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "number": 0,
                    "bold": 0,
                    "italic": 0,
                    "underline": 0,
                    "smallCaps": 0,
                    "strikeThrough": 0,
                    "lineSpacing": 0,
                    "padding": [
                        6,
                        0,
                        6,
                        0
                    ],
                    "font": "Verdana",
                    "size": 40,
                    "outline": 1,
                    "shadow": 1,
                    "outlineColor": {
                        "red": 0,
                        "green": 0,
                        "blue": 0,
                        "alpha": 255
                    },
                    "shadowColor": {
                        "red": 0,
                        "green": 0,
                        "blue": 0,
                        "alpha": 255
                    },
                    "fieldFlags": {
                        "font": 1,
                        "size": 1,
                        "color": 0,
                        "bold": 1,
                        "italic": 1,
                        "smallCaps": 1,
                        "underline": 1,
                        "strikeThrough": 1,
                        "lineSpacing": 1,
                        "outline": 0,
                        "outlineColor": 1,
                        "outlineSize": 1,
                        "shadow": 0,
                        "shadowColor": 1,
                        "shadowOffsetX": 1,
                        "shadowOffsetY": 1,
                        "padding.0": 1,
                        "padding.1": 1,
                        "padding.2": 1,
                        "padding.3": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "color": {
                        "red": 0,
                        "green": 0,
                        "blue": 0,
                        "alpha": 255
                    }
                },
                "uid": "FA7327B127CB984DD35B1F66B0CB1EE4206B",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowText",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "viewport": {
                        "type": "ui"
                    },
                    "predefinedPositionId": 6,
                    "positionType": 1,
                    "number": 0,
                    "duration": 90,
                    "waitForCompletion": 0,
                    "blendMode": 0,
                    "positionOrigin": 0,
                    "origin": 0,
                    "zOrder": 0,
                    "text": {
                        "lcId": "480206236AA2C54F0898F5F23FD9605BED13",
                        "defaultText": "N o w  l o a d i n g . . . "
                    },
                    "position": {
                        "x": 400,
                        "y": 600
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
                    "fieldFlags": {
                        "duration": 0,
                        "easing.type": 1,
                        "animation.type": 1,
                        "origin": 1,
                        "positionOrigin": 1,
                        "zOrder": 1,
                        "blendMode": 1,
                        "viewport.type": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "6CDDF8BB5ED30240BA2979641F752EE30023",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "gs.WaitCommand",
                "params": {
                    "time": 300
                },
                "uid": "56462F696356374C607A9E02A868E8D2146E",
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
                "uid": "38E2F1E97187C64D104A5253F5AF5B7963B3",
                "indent": 0
            },
            {
                "id": "gs.EraseText",
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
                "uid": "F0AA6B861BB1B14A402BEA6568FE638672AE",
                "indent": 0
            },
            {
                "id": "gs.EraseVideo",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "number": 0,
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
                "uid": "C20809A71D25424E984992B49CF922A8624E",
                "indent": 0
            },
            {
                "id": "vn.ChangeScene",
                "params": {
                    "scene": {
                        "uid": "B6559CB4834F96431518AE1673A6FD15968E",
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
                "uid": "6CEC5B0997014640345A95F686A3DB5889F8",
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