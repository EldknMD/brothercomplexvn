GS.dataCache['0E6DDF5C20935841F25A54D270C5D7844EE8'] = {
    "uid": "0E6DDF5C20935841F25A54D270C5D7844EE8",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "En la escuela otra vez",
        "type": "vn.scene",
        "parentId": "46C936D6411C874C713BCAB76EDA3BF00B4E",
        "chapterUid": "46C936D6411C874C713BCAB76EDA3BF00B4E",
        "order": 11,
        "localizableStrings": {
            "7E1A16EE7011C141C448F776AE602D21770A": {
                "t": "See? Like this...",
                "d": {
                    "cid": "9AE3536D38AF834CD18A175221519589AE53",
                    "eid": "0B82528875F29148A07B0E25774665FD82EE"
                }
            },
            "AEE727208A3EA74DFF8A2DA2459065C0E343": {
                "t": "Ah!",
                "d": {
                    "cid": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "eid": "4CC9595539D44941F78AC6A969BAE30FE13B"
                }
            },
            "2D1924C61AC2534E203BD258F298B21FCF8D": {
                "t": "It's bigger than I though!",
                "d": {
                    "cid": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "eid": "4FA6E9CB0F68E24C535969585811583818B2"
                }
            },
            "58B0906313CD874DB28A5CF4B3235FDE1481": {
                "t": "So tasty... mmnn...",
                "d": {
                    "cid": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "eid": "EE4055961915E34AD58A9064107AB4912106"
                }
            },
            "A96674810C82444C046871324FA01F80E1CE": {
                "t": "I-I guess that's... one way to eat a chocolate coronet...",
                "d": {
                    "cid": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "eid": "25C6951B14CD0349173B6108B0B42D992724"
                }
            },
            "E9B4DEE956A9544DE62B8AA5D80F18124B1F": {
                "t": "Humm? *Mouth full*",
                "d": {
                    "cid": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "eid": "7A268B05614D224225699092353B21967D26"
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
                        "name": "StudentdormitoryOutside_Morning",
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
                "indent": 0
            },
            {
                "id": "gs.PlayMusic",
                "params": {
                    "layer": 0,
                    "loop": 1,
                    "music": {
                        "name": "Playful_-_Kidding_Around",
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
                "uid": "687EC5C00F0ED444751B6F21760E51B20E95",
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
                    "positionType": 2,
                    "motionBlur": {
                        "enabled": 0,
                        "delay": 2,
                        "opacity": 100,
                        "dissolveSpeed": 3
                    },
                    "position": {
                        "x": -100,
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
                "indent": 0,
                "uid": "3DBCFDB8466A65496C587F29C50EB927D0E4"
            },
            {
                "id": "vn.TintCharacter",
                "params": {
                    "characterId": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
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
                    "waitForCompletion": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "AA30522406CE7541AE48D973830254B31BA0"
            },
            {
                "id": "vn.CharacterJoinScene",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "predefinedPositionId": 0,
                    "expressionId": "53B5A62E6C3F4640A43826223510C98F1E51",
                    "characterId": "9AE3536D38AF834CD18A175221519589AE53",
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
                        "x": 500,
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
                    "duration": 60,
                    "waitForCompletion": 0,
                    "fieldFlags": {
                        "duration": 0
                    }
                },
                "uid": "1808B5EE969D4341009B79F4E30A73A6492B",
                "indent": 0
            },
            {
                "id": "vn.TintCharacter",
                "params": {
                    "characterId": "9AE3536D38AF834CD18A175221519589AE53",
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
                    "waitForCompletion": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "3E5B14FE5C8F264492685F363734DBDB8E9B"
            },
            {
                "id": "vn.CharacterJoinScene",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "predefinedPositionId": 0,
                    "expressionId": null,
                    "characterId": "5C64F7931FF72442468B32F99E98A565DDA8",
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
                        "x": 900,
                        "y": 250
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
                    }
                },
                "uid": "1E5308AD9BFB324DA8192328E1659281B205",
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
                        "red": -255,
                        "green": -255,
                        "blue": -255,
                        "grey": 0
                    },
                    "duration": 0,
                    "waitForCompletion": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "1FD1876A9860B149526B4FA410684ECAD4E0"
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
                "uid": "92284A602516A8475E59EDA406272EA4B6DF",
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
                        "lcId": "7E1A16EE7011C141C448F776AE602D21770A",
                        "defaultText": "See? Like this..."
                    },
                    "position": 0,
                    "characterId": "9AE3536D38AF834CD18A175221519589AE53",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "0B82528875F29148A07B0E25774665FD82EE",
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
                        "lcId": "AEE727208A3EA74DFF8A2DA2459065C0E343",
                        "defaultText": "Ah!"
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
                "uid": "4CC9595539D44941F78AC6A969BAE30FE13B",
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
                        "lcId": "2D1924C61AC2534E203BD258F298B21FCF8D",
                        "defaultText": "It's bigger than I though!"
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
                "uid": "4FA6E9CB0F68E24C535969585811583818B2",
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
                        "lcId": "58B0906313CD874DB28A5CF4B3235FDE1481",
                        "defaultText": "So tasty... mmnn..."
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
                "uid": "EE4055961915E34AD58A9064107AB4912106",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "vn.TintCharacter",
                "params": {
                    "characterId": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "tone": {
                        "red": 0,
                        "green": 0,
                        "blue": 0,
                        "grey": 0
                    },
                    "duration": 60,
                    "waitForCompletion": 0
                },
                "uid": "E64F55D07E38224EFF3B0B772E37056E763D",
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
                        "red": 0,
                        "green": 0,
                        "blue": 0,
                        "grey": 0
                    },
                    "duration": 60,
                    "waitForCompletion": 0
                },
                "uid": "5F3A24597E401345083AA708DF8A06A06D8B",
                "indent": 0
            },
            {
                "id": "vn.ShakeCharacter",
                "params": {
                    "characterId": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "duration": 30,
                    "waitForCompletion": 0,
                    "range": {
                        "y": 3,
                        "x": 0
                    },
                    "speed": 1000,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    }
                },
                "uid": "17C64461205D9245BA2B95C6A676F8F22740",
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
                        "lcId": "A96674810C82444C046871324FA01F80E1CE",
                        "defaultText": "I-I guess that's... one way to eat a chocolate coronet..."
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
                "uid": "25C6951B14CD0349173B6108B0B42D992724",
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
                        "lcId": "E9B4DEE956A9544DE62B8AA5D80F18124B1F",
                        "defaultText": "Humm? *Mouth full*"
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
                "uid": "7A268B05614D224225699092353B21967D26",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "vn.CharacterExitScene",
                "params": {
                    "characterId": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "duration": 60,
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
                "indent": 0,
                "uid": "AD557F979F0A744F727AA7A3A816E9FD77DB"
            },
            {
                "id": "vn.CharacterExitScene",
                "params": {
                    "characterId": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "duration": 60,
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
                "indent": 0,
                "uid": "BC026F5F88EDD2424649F0114F930F446A58"
            },
            {
                "id": "vn.CharacterExitScene",
                "params": {
                    "characterId": "9AE3536D38AF834CD18A175221519589AE53",
                    "duration": 60,
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
                "indent": 0,
                "uid": "DDAD5F5C2938954C03599B9785D47865C18E"
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
                "uid": "A0DE49574012C741B5583096ACDF3956A94B",
                "indent": 0
            },
            {
                "id": "gs.StopMusic",
                "params": {
                    "layer": 0,
                    "fadeOutDuration": 60,
                    "fieldFlags": {
                        "fadeOutDuration": 0
                    }
                },
                "uid": "077BD37371095240D908C3391C6E9251F358",
                "indent": 0
            },
            {
                "id": "vn.ChangeBackground",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "graphic": null,
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
                    }
                },
                "uid": "5AB85A8B7E3B034E09280564FB3CD75ECBA4",
                "indent": 0
            },
            {
                "id": "vn.ChangeScene",
                "params": {
                    "scene": {
                        "uid": "0AC3A1B11F4A4640DF1BA9E684E9D3C57F06",
                        "name": "chismosas"
                    },
                    "savePrevious": 0,
                    "erasePictures": 0,
                    "eraseTexts": 0,
                    "eraseVideos": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "A0ED09484FDDB74C3C0ABD45CD806093708F"
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