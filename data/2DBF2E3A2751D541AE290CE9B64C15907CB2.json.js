GS.dataCache['2DBF2E3A2751D541AE290CE9B64C15907CB2'] = {
    "uid": "2DBF2E3A2751D541AE290CE9B64C15907CB2",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "caminando",
        "type": "vn.scene",
        "parentId": "B0991EDA614B0542656A9BF6A31AF3C8CD27",
        "chapterUid": "B0991EDA614B0542656A9BF6A31AF3C8CD27",
        "order": 3,
        "localizableStrings": {
            "66C1AD321A62F149456ACC796050917F4EC5": {
                "t": "Sorry for what happened.",
                "d": {
                    "cid": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "eid": "EBBD147A8FBFD344C8783F441D4F0CCBD75A"
                }
            },
            "18E975EA9E080140519B3026F1A8A5DEEB32": {
                "t": "It was an accident.",
                "d": {
                    "cid": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "eid": "AF18A79317B127470919B8803C420E311EB2"
                }
            },
            "CFB099293E702143712885B9CBC464D2D927": {
                "t": "Don't worry, onii-chan.\nI know.",
                "d": {
                    "cid": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "eid": "DF1B42BE743EB1493019CB67E41AC3093349"
                }
            },
            "8EBF42972CEBE3473C983651C76404286426": {
                "t": "Hey, onii-chan!",
                "d": {
                    "cid": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "eid": "3976A6804C055741F09B1267C77959F09F59"
                }
            },
            "208D904C74A8B744A5692E739DDDE8806ABC": {
                "t": "Since you came back i'll make sure \nyou can relax before school starts! :3",
                "d": {
                    "cid": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "eid": "C98F34684F18134967598790C615295807B1"
                }
            },
            "1D99FD0E92838744C26984010988FF8DD7C8": {
                "t": "Well, it's nice of you to offer,",
                "d": {
                    "cid": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "eid": "FBF82BC39C0C3440FD8B1152EDB2B464BA04"
                }
            },
            "8B53BD922ACBB04E2629D777D2C4FD78FC1D": {
                "t": "but I can take care of myself.",
                "d": {
                    "cid": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "eid": "92901B324823464E518B22E5639FD0E660E9"
                }
            },
            "AFCD0BB512BCB1410F9AC875BFE9CEB082B9": {
                "t": "No way!",
                "d": {
                    "cid": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "eid": "38B7E2FD3608C544A459FF17CE59869C6F19"
                }
            },
            "F91076375AA69147D178BFB86DD6DBDF8D35": {
                "t": "I wanna play with onii-chan! :D",
                "d": {
                    "cid": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "eid": "EFCB5B0469813749E26BADD0224B7F49C02A"
                }
            },
            "D388523E27C6574D87291305398C8336E449": {
                "t": "So that's what you really wanted...",
                "d": {
                    "cid": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "eid": "EEA3B4BF7928C44A598AB8F53052B554725E"
                }
            },
            "B9F37CDC37F5644A81395173841C5E6107E9": {
                "t": "Come in...",
                "d": {
                    "cid": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "eid": "B0709E4F03E030471E896BA72FE9B579909C"
                }
            },
            "7F10FA0174319240D8782C19DE1BC4EF441B": {
                "t": "Welcome back home, onii-chan :3",
                "d": {
                    "cid": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "eid": "26FF989528208343FA195303346AC8571951"
                }
            }
        },
        "commands": [
            {
                "id": "gs.PlayMusic",
                "params": {
                    "layer": 0,
                    "loop": 1,
                    "music": {
                        "name": "Theme_-_Forever_Together",
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
                "uid": "91627E3B4CA2F2417C38C0D967735A39A941",
                "indent": 0
            },
            {
                "id": "vn.ChangeBackground",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "graphic": {
                        "name": "Residentialarea_Sunset",
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
                    "duration": 120,
                    "waitForCompletion": 1,
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
                "uid": "3437B44E017CC4403D7B9B8473091E8078DE",
                "indent": 0
            },
            {
                "id": "vn.CharacterJoinScene",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "predefinedPositionId": 0,
                    "expressionId": null,
                    "characterId": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "zOrder": 0,
                    "origin": 1,
                    "blendMode": 0,
                    "positionType": 0,
                    "motionBlur": {
                        "enabled": 0,
                        "delay": 2,
                        "opacity": 100,
                        "dissolveSpeed": 3
                    },
                    "position": {
                        "x": 0,
                        "y": 0
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
                    "duration": 0,
                    "waitForCompletion": 0,
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "uid": "0C2255646B55134FB01AC327563838E7F0DE",
                "indent": 0
            },
            {
                "id": "vn.CharacterJoinScene",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "predefinedPositionId": 4,
                    "expressionId": null,
                    "characterId": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "zOrder": 0,
                    "origin": 1,
                    "blendMode": 0,
                    "positionType": 2,
                    "motionBlur": {
                        "enabled": 0,
                        "delay": 2,
                        "opacity": 100,
                        "dissolveSpeed": 3
                    },
                    "position": {
                        "x": 700,
                        "y": 200
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
                    "duration": 0,
                    "waitForCompletion": 0,
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "uid": "C4D71CD40701A146696AA28804A7A6004114",
                "indent": 0
            },
            {
                "id": "vn.ShakeCharacter",
                "params": {
                    "characterId": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "duration": 59999999.94,
                    "waitForCompletion": 0,
                    "range": {
                        "y": 5,
                        "x": 10
                    },
                    "speed": 50,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    }
                },
                "uid": "043AE02F7EDC55476A5AA54949031F3DA009",
                "indent": 0
            },
            {
                "id": "vn.ShakeCharacter",
                "params": {
                    "characterId": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "duration": 59999999.94,
                    "waitForCompletion": 0,
                    "range": {
                        "y": 5,
                        "x": 10
                    },
                    "speed": 70,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "fieldFlags": {
                        "easing.type": 1
                    }
                },
                "uid": "5480E7AB016DF741427B06676481E714ACCB",
                "indent": 0,
                "expanded": false
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
                        "duration": 0
                    }
                },
                "uid": "A348E67E34E11745825886960F202807B9D1",
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
                        "lcId": "66C1AD321A62F149456ACC796050917F4EC5",
                        "defaultText": "Sorry for what happened."
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
                "uid": "EBBD147A8FBFD344C8783F441D4F0CCBD75A",
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
                        "lcId": "18E975EA9E080140519B3026F1A8A5DEEB32",
                        "defaultText": "It was an accident."
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
                "uid": "AF18A79317B127470919B8803C420E311EB2",
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
                        "lcId": "CFB099293E702143712885B9CBC464D2D927",
                        "defaultText": "Don't worry, onii-chan.\nI know."
                    },
                    "position": 0,
                    "characterId": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "DF1B42BE743EB1493019CB67E41AC3093349",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "vn.ShakeCharacter",
                "params": {
                    "characterId": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "duration": 30,
                    "waitForCompletion": 0,
                    "range": {
                        "y": 5,
                        "x": 0
                    },
                    "speed": 500,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    }
                },
                "uid": "A6F05739679B5447A12B7E3247234948BA90",
                "indent": 0
            },
            {
                "id": "vn.ShakeCharacter",
                "params": {
                    "characterId": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "duration": 59999999.94,
                    "waitForCompletion": 0,
                    "range": {
                        "y": 5,
                        "x": 10
                    },
                    "speed": 50,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    }
                },
                "uid": "3941D79E90EDF846616B578457E4C96324D3",
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
                        "lcId": "8EBF42972CEBE3473C983651C76404286426",
                        "defaultText": "Hey, onii-chan!"
                    },
                    "position": 0,
                    "characterId": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "3976A6804C055741F09B1267C77959F09F59",
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
                        "lcId": "208D904C74A8B744A5692E739DDDE8806ABC",
                        "defaultText": "Since you came back i'll make sure \nyou can relax before school starts! :3"
                    },
                    "position": 0,
                    "characterId": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "C98F34684F18134967598790C615295807B1",
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
                        "lcId": "1D99FD0E92838744C26984010988FF8DD7C8",
                        "defaultText": "Well, it's nice of you to offer,"
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
                "uid": "FBF82BC39C0C3440FD8B1152EDB2B464BA04",
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
                        "lcId": "8B53BD922ACBB04E2629D777D2C4FD78FC1D",
                        "defaultText": "but I can take care of myself."
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
                "uid": "92901B324823464E518B22E5639FD0E660E9",
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
                        "lcId": "AFCD0BB512BCB1410F9AC875BFE9CEB082B9",
                        "defaultText": "No way!"
                    },
                    "position": 0,
                    "characterId": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "38B7E2FD3608C544A459FF17CE59869C6F19",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "vn.CharacterChangeExpression",
                "params": {
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 1,
                        "fading": 0,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "duration": 10,
                    "waitForCompletion": 0,
                    "characterId": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "expressionId": "F01A3B7466424641365A53F18171DB2B122F",
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "uid": "04A2E2492AF2154BEC3ACC375D938DE302E7",
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
                        "lcId": "F91076375AA69147D178BFB86DD6DBDF8D35",
                        "defaultText": "I wanna play with onii-chan! :D"
                    },
                    "position": 0,
                    "characterId": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "EFCB5B0469813749E26BADD0224B7F49C02A",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "vn.CharacterChangeExpression",
                "params": {
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 1,
                        "fading": 0,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "duration": 10,
                    "waitForCompletion": 0,
                    "characterId": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "expressionId": "B027C1707C37144CF37BCFE88DE8F5EB8AEF",
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "uid": "AD13CA4B8A1C934C7F8B436280E06112FA35",
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
                        "lcId": "D388523E27C6574D87291305398C8336E449",
                        "defaultText": "So that's what you really wanted..."
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
                "uid": "EEA3B4BF7928C44A598AB8F53052B554725E",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "vn.ShakeCharacter",
                "params": {
                    "characterId": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "duration": 60,
                    "waitForCompletion": 0,
                    "range": {
                        "y": 5,
                        "x": 10
                    },
                    "speed": 50,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    }
                },
                "uid": "47C71EE93F4FD6428E3AB7D16CEC0B3F40B8",
                "indent": 0
            },
            {
                "id": "vn.ShakeCharacter",
                "params": {
                    "characterId": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "duration": 60,
                    "waitForCompletion": 0,
                    "range": {
                        "y": 5,
                        "x": 10
                    },
                    "speed": 70,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "fieldFlags": {
                        "easing.type": 1
                    }
                },
                "uid": "537709590C2459458C6B4778504B2C7DC250",
                "indent": 0,
                "expanded": false
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
                        "lcId": "B9F37CDC37F5644A81395173841C5E6107E9",
                        "defaultText": "Come in..."
                    },
                    "position": 0,
                    "characterId": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "B0709E4F03E030471E896BA72FE9B579909C",
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
                        "lcId": "7F10FA0174319240D8782C19DE1BC4EF441B",
                        "defaultText": "Welcome back home, onii-chan :3"
                    },
                    "position": 0,
                    "characterId": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "26FF989528208343FA195303346AC8571951",
                "indent": 0,
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
                "uid": "2F0BE2FD33F0204E6D4B33F86CF8E328E61C",
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
                    "duration": 120,
                    "waitForCompletion": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "66928ADA7DE1D64ACD0ADA84BC226550C9A1",
                "indent": 0
            },
            {
                "id": "vn.CharacterExitScene",
                "params": {
                    "characterId": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "duration": 120,
                    "waitForCompletion": 0,
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
                "uid": "FA9E12B656F525419D9B70E166005A0B67B9",
                "indent": 0
            },
            {
                "id": "vn.CharacterExitScene",
                "params": {
                    "characterId": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "duration": 120,
                    "waitForCompletion": 0,
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
                "uid": "55EB9E259027B249FC68D7B3632F631B2866",
                "indent": 0
            },
            {
                "id": "vn.ChangeScene",
                "params": {
                    "scene": {
                        "uid": "EB9E338B2DD176457E6BAC774630FE1ADB30",
                        "name": "Habitación jack"
                    },
                    "savePrevious": 0,
                    "erasePictures": 0,
                    "eraseTexts": 0,
                    "eraseVideos": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "282B14087E55A54DF1496693B478923830CB",
                "indent": 0
            }
        ],
        "livePreviewDisabled": false,
        "numberVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ]
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