GS.dataCache['0A910A5248F5544324297507C368421447DF'] = {
    "uid": "0A910A5248F5544324297507C368421447DF",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Rose entra el juego",
        "type": "vn.scene",
        "parentId": "AB3FC2A69226A54ADB19C2774904972C42E1",
        "chapterUid": "AB3FC2A69226A54ADB19C2774904972C42E1",
        "order": 2,
        "localizableStrings": {
            "467AFF3D19246546B32A1E14B70783DE6693": {
                "t": "Hey, Jack! You're Late <3",
                "d": {
                    "cid": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "eid": "FB6A3C075B0066434A2870947D6D15B6E827"
                }
            },
            "133E0BFE8E6CB148601AFC064DD9706250BB": {
                "t": "**You see, Rose wanted to join in.**",
                "d": {
                    "cid": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "eid": "1D839B98721094479B2965484C76508D2AFE"
                }
            },
            "5007BB8E577CB440AF5A4AA073CEFAC669A1": {
                "t": "**It'll be fun, right?**",
                "d": {
                    "cid": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "eid": "CF3A745D1A6994409E79DFE36F932E0FBAA6"
                }
            },
            "A72993EB6B94B847FC5A46A9E7A030EC4C46": {
                "t": "I'm not so sure... ",
                "d": {
                    "cid": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "eid": "B62DD44832AE73403C6ABD2873431144CAEB"
                }
            },
            "6308E17A441AC94CA15ABFD4D13988F8185A": {
                "t": "She's never played, has she?",
                "d": {
                    "cid": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "eid": "24541D9549DF8242BC58007663A9640E8F9D"
                }
            },
            "6A51B10F56FDB248DC7990D7739508E03CBA": {
                "t": "**It'll be fine.**",
                "d": {
                    "cid": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "eid": "7CF01A9E86C7F147ED7AD1749BC19B910B8C"
                }
            },
            "D4B07B4D48DA5648319B58B2968B1E7A206A": {
                "t": "**If she supports you can teach her, right?**",
                "d": {
                    "cid": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "eid": "1EFA6B194B6A8241BA997CD7A38EF1F509E3"
                }
            },
            "BE0C8B172A92F149EE18C716C50C3C9A8BC3": {
                "t": "Well okay...",
                "d": {
                    "cid": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "eid": "6570EFF02AD1E64F1959F358309B85332AC0"
                }
            },
            "EE414D531E0AB84A1668C2D59A2A5F171BE1": {
                "t": "Let's see how she does.",
                "d": {
                    "cid": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "eid": "71090610362871462E1968C8B6171E132495"
                }
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
                        "name": "PlayerHomeF_Night3",
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
                    "duration": 0,
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
                        "duration": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0
            },
            {
                "id": "gs.PlayMusic",
                "params": {
                    "layer": 0,
                    "loop": 1,
                    "music": {
                        "name": "Competitive_-_Fired_Up",
                        "volume": 100,
                        "playbackRate": 100
                    },
                    "fadeInDuration": 0,
                    "playTime": {
                        "min": 10,
                        "max": 30
                    },
                    "playRange": {
                        "start": 10,
                        "end": 20
                    },
                    "playType": 0,
                    "waitForCompletion": 0,
                    "fieldFlags": {
                        "music.volume": 1,
                        "music.playbackRate": 1,
                        "fadeInDuration": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "972DDCA043E0C44F8E2B9BF2D32E1937C66F",
                "indent": 0
            },
            {
                "id": "vn.CharacterJoinScene",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "predefinedPositionId": 1,
                    "expressionId": null,
                    "characterId": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "zOrder": 0,
                    "origin": 1,
                    "blendMode": 0,
                    "positionType": 1,
                    "motionBlur": {
                        "enabled": 0,
                        "delay": 2,
                        "opacity": 100,
                        "dissolveSpeed": 3
                    },
                    "position": {
                        "x": 258,
                        "y": 241,
                        "angle": 0,
                        "zoom": 1,
                        "horizontalFlip": false,
                        "data": {},
                        "color": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 0
                        }
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 0
                    },
                    "duration": 60,
                    "waitForCompletion": 0,
                    "fieldFlags": {
                        "duration": 0
                    },
                    "previewBackground": {
                        "name": ""
                    }
                },
                "uid": "432CEA3F81AE854E377AD6C55FF22F383FC5",
                "indent": 0
            },
            {
                "id": "vn.TintCharacter",
                "params": {
                    "characterId": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "tone": {
                        "red": -68,
                        "green": -68,
                        "blue": 0,
                        "grey": 68
                    },
                    "duration": 0,
                    "waitForCompletion": 1,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "A9C2F40325D6B24DFC68F1E7AD9FD83637F8",
                "indent": 0
            },
            {
                "id": "vn.MessageBoxVisibility",
                "params": {
                    "duration": 30,
                    "waitForCompletion": true,
                    "id": "messageBox",
                    "visible": 1,
                    "animation": {
                        "type": 0,
                        "movement": 3,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "uid": "C214F9754852A441802AC78894F3B1E7425A",
                "indent": 0
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "467AFF3D19246546B32A1E14B70783DE6693",
                        "defaultText": "Hey, Jack! You're Late <3"
                    },
                    "position": 0,
                    "characterId": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "FB6A3C075B0066434A2870947D6D15B6E827",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "133E0BFE8E6CB148601AFC064DD9706250BB",
                        "defaultText": "**You see, Rose wanted to join in.**"
                    },
                    "position": 0,
                    "characterId": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "1D839B98721094479B2965484C76508D2AFE",
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "5007BB8E577CB440AF5A4AA073CEFAC669A1",
                        "defaultText": "**It'll be fun, right?**"
                    },
                    "position": 0,
                    "characterId": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "CF3A745D1A6994409E79DFE36F932E0FBAA6",
                "expanded": true
            },
            {
                "id": "vn.ShakeCharacter",
                "params": {
                    "characterId": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "duration": 30,
                    "waitForCompletion": 0,
                    "range": {
                        "y": 2,
                        "x": 2
                    },
                    "speed": 1000,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    }
                },
                "indent": 0,
                "uid": "A5E3AD11631371489A191ED9A87A7B9BC623"
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "A72993EB6B94B847FC5A46A9E7A030EC4C46",
                        "defaultText": "I'm not so sure... "
                    },
                    "position": 0,
                    "characterId": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "B62DD44832AE73403C6ABD2873431144CAEB",
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "6308E17A441AC94CA15ABFD4D13988F8185A",
                        "defaultText": "She's never played, has she?"
                    },
                    "position": 0,
                    "characterId": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "24541D9549DF8242BC58007663A9640E8F9D",
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "6A51B10F56FDB248DC7990D7739508E03CBA",
                        "defaultText": "**It'll be fine.**"
                    },
                    "position": 0,
                    "characterId": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "7CF01A9E86C7F147ED7AD1749BC19B910B8C",
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "D4B07B4D48DA5648319B58B2968B1E7A206A",
                        "defaultText": "**If she supports you can teach her, right?**"
                    },
                    "position": 0,
                    "characterId": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "1EFA6B194B6A8241BA997CD7A38EF1F509E3",
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "BE0C8B172A92F149EE18C716C50C3C9A8BC3",
                        "defaultText": "Well okay..."
                    },
                    "position": 0,
                    "characterId": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "6570EFF02AD1E64F1959F358309B85332AC0",
                "expanded": true
            },
            {
                "id": "gs.ShowPicture",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "viewport": {
                        "type": "ui"
                    },
                    "size": {
                        "type": 0,
                        "width": 100,
                        "height": 100
                    },
                    "visual": {
                        "type": 0,
                        "quad": {
                            "color": {
                                "red": 255,
                                "green": 255,
                                "blue": 255,
                                "alpha": 255
                            }
                        },
                        "frame": {
                            "thickness": 16,
                            "cornerSize": 16
                        },
                        "threePartImage": {
                            "orientation": 0
                        }
                    },
                    "predefinedPositionId": 0,
                    "number": 0,
                    "blendMode": 0,
                    "zOrder": 0,
                    "duration": 60,
                    "origin": 1,
                    "waitForCompletion": 1,
                    "positionType": 0,
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
                    "fieldFlags": {
                        "origin": 1,
                        "duration": 0
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "graphic": {
                        "name": "click ajustado",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        }
                    }
                },
                "uid": "FDC6DD4351BD154DC4186B1927FC4522B51C",
                "indent": 0
            },
            {
                "id": "vn.UnlockCG",
                "params": {
                    "cgId": "D91F03335F1A4140B64B2863009B3C17AD7F"
                },
                "indent": 0,
                "uid": "D2F8349C6A083249FC2914C145583AA2937E"
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "EE414D531E0AB84A1668C2D59A2A5F171BE1",
                        "defaultText": "Let's see how she does."
                    },
                    "position": 0,
                    "characterId": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "71090610362871462E1968C8B6171E132495",
                "expanded": true
            },
            {
                "id": "vn.MessageBoxVisibility",
                "params": {
                    "duration": 30,
                    "waitForCompletion": true,
                    "id": "messageBox",
                    "visible": 0,
                    "animation": {
                        "type": 0,
                        "movement": 3,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "uid": "AAB706BE102E764EE13826B1B4A02E38F2A1",
                "indent": 0
            },
            {
                "id": "vn.CharacterExitScene",
                "params": {
                    "characterId": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "duration": 0,
                    "waitForCompletion": 1,
                    "easing": {
                        "type": 1,
                        "inOut": 0
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
                "uid": "55D1DB2F141CC341CD5B12C5842A4142E479",
                "indent": 0
            },
            {
                "id": "vn.TintBackground",
                "params": {
                    "layer": 0,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "tone": {
                        "red": -255,
                        "green": -255,
                        "blue": -255,
                        "grey": 0
                    },
                    "duration": 0,
                    "waitForCompletion": 1,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "7C861ED077D9A3452438B5339B2772DF7400",
                "indent": 0
            },
            {
                "id": "gs.StopMusic",
                "params": {
                    "layer": 0,
                    "fadeOutDuration": 120,
                    "fieldFlags": {
                        "fadeOutDuration": 0
                    }
                },
                "uid": "B70DB2EC8BAD5148AE0B88D690E9F61B7D36",
                "indent": 0
            },
            {
                "id": "gs.ErasePicture",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "number": 0,
                    "duration": 120,
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
                "uid": "7D584B444F5F6646315B1B112E2C1D269BCD",
                "indent": 0
            },
            {
                "id": "vn.ChangeScene",
                "params": {
                    "scene": {
                        "uid": "3DE094D4583B624FDB494224623611903B62",
                        "name": "El juego"
                    },
                    "savePrevious": 0,
                    "erasePictures": 0,
                    "eraseTexts": 0,
                    "eraseVideos": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "CF943CB70066D8496A6809230FF529BF6DFF",
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