GS.dataCache['A2E31494234FD34AC9994C034639E0A33F7B'] = {
    "uid": "A2E31494234FD34AC9994C034639E0A33F7B",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "En el auto",
        "type": "vn.scene",
        "parentId": "CB41E82F252DC9491359830887DF81F590ED",
        "chapterUid": "CB41E82F252DC9491359830887DF81F590ED",
        "order": 6,
        "commands": [
            {
                "id": "vn.ChangeBackground",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "graphic": {
                        "name": "PlayerHomeM_Morning2",
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
                "uid": "DD6A4FB83AB93148CD5A9FB124A01BB3C13D",
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
                "uid": "A4B97154436DE8450D08EC864B701F7509F1",
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
                        "x": 500,
                        "y": 300
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
                    "waitForCompletion": 1,
                    "fieldFlags": {
                        "duration": 0
                    }
                },
                "uid": "4509AF737A64F945395889E51F0A5D71F902",
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
                "uid": "271DA9F55C3530452A799BC00769A6F18C55",
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
                        "lcId": "5173703B8B351346005B01E5D7325C842668",
                        "defaultText": "**Calls by phone**"
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
                "uid": "DE9BE99D737141480E2A1A0182E510A5BB55",
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
                        "lcId": "397BA0E45F4E6343203ABE76FB0A117EA1E1",
                        "defaultText": "**Huh?**"
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
                "uid": "B4B38EBD36C89342C01BE9B4A8668665B7EA",
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
                        "lcId": "0B5BD89A348B774E437B5D17EAC777F3F248",
                        "defaultText": "**Picks up**"
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
                "uid": "D611A56B2C4F714086292B4061C4167E3F2D",
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
                        "lcId": "D665521952185242F45B294230625D969D7F",
                        "defaultText": "**Morning. Not having any...\ntrouble there?**"
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
                "uid": "7478841C99B744464598BB2051837988CD07",
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
                        "lcId": "8DF48CF45F8071400F3B68772E430366D534",
                        "defaultText": "What?"
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
                "uid": "A6646B327930C24C662A2BF1276B90A1A94D",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "vn.ShakeCharacter",
                "params": {
                    "characterId": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "duration": 30,
                    "waitForCompletion": 0,
                    "range": {
                        "y": 3,
                        "x": 3
                    },
                    "speed": 1000,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    }
                },
                "uid": "B1483E3752705242D77929A123EE557B4B61",
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
                        "lcId": "FF8E76888785764D118977946B5B3A2256EA",
                        "defaultText": "Nooo... **Remembers Rose's bra**"
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
                "uid": "728CB5C04033A74D338A5B81CE81AD0E2B04",
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
                        "lcId": "4A1781DC77AF3844E1985744EF260E40A334",
                        "defaultText": "Everything's fine."
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
                "uid": "7B0372F06E59B44BEE79AB59E67715046190",
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
                        "lcId": "561319D32A758946CC3826C29DDB8E519CD0",
                        "defaultText": "Why?"
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
                "uid": "619977012B4AD14FA98B36941A3E44D91BEE",
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
                        "lcId": "DAE1F6B9792AD442542916D3A656DD5B8CF5",
                        "defaultText": "**Really?**"
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
                "uid": "239726A14C7402432E2AAB636FBD154F7514",
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
                        "lcId": "6E16957C65C96147DA5A14998BACC2739B6E",
                        "defaultText": "**Well then why don't we meet and walk to school together**"
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
                "uid": "7A1FAB9665A0C24E33899BC8B7CAAF32397C",
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
                        "lcId": "4454B4523C5FA44CE218C968F3E927B5F276",
                        "defaultText": "Sound good,"
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
                "uid": "4F6CC62C43FBB746B01BA2638EBA9F9EC818",
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
                        "lcId": "9C824AD7765D4447578BBEE01D1E380E92EB",
                        "defaultText": "See you after breakfast?"
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
                "uid": "305BE5EE7E0A14482B599D87E7C87AC061DA",
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
                        "lcId": "866416BB7E8CF448A07BA4C633708A076D0D",
                        "defaultText": "**Sure, see you then!**"
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
                "uid": "FD014174518598479B4937E71FC1CE8CCBBA",
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
                        "lcId": "94297B36210DB144836B1C638C13D71A2A0D",
                        "defaultText": "Right, breakfast..."
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
                "uid": "F113D83E807C8541CB89A7326E1B3BCD79F0",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "vn.CharacterExitScene",
                "params": {
                    "characterId": "36FA34704E47C543F34AA4D7316DDB11C167",
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
                "uid": "688E572E46C9F44ABB6A0668431CD515E073",
                "indent": 0
            },
            {
                "id": "vn.ChangeBackground",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "graphic": {
                        "name": "HomeOutside_Morning2",
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
                "uid": "61BB95543EE082430B0A6C868E4B571027A7",
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
                        "x": 400,
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
                    "waitForCompletion": 1,
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "uid": "F54170DA8AC7C84A7A2A07E10C2ED38F5DCF",
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
                        "lcId": "BB7D9F8B3A36D24C853B9B26B7BFF1B047BF",
                        "defaultText": "Ding Dong!"
                    },
                    "position": 0,
                    "characterId": "27DBE97B7BF3984CD72BBDE11D7BE9F7D39F",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "B54EE40B4FD8534D33687D96F2E065CADDB9",
                "indent": 0,
                "expanded": true
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
                        "x": -200,
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
                    "duration": 60,
                    "waitForCompletion": 1,
                    "fieldFlags": {
                        "duration": 0,
                        "easing.type": 1,
                        "animation.type": 1,
                        "motionBlur.enabled": 1,
                        "origin": 1,
                        "zOrder": 1,
                        "blendMode": 1,
                        "viewport.type": 1
                    }
                },
                "uid": "AFFECA80471E99411E899B027F2E8F5294DB",
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
                        "lcId": "B105837604D93649EF894FE7C78F0E678D3A",
                        "defaultText": "Oh! <3"
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
                "uid": "FF291E20355F204CD61BCD721575D3ED0FAB",
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
                        "lcId": "F8BE9D847AB8B443994A8CF6780539D525BF",
                        "defaultText": "There you are, Megan!"
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
                "uid": "E362B5E14AE9144FE96B3A57A53DECC58D61",
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
                        "lcId": "89C3449B8758F245F10BA21927FC2B1A5004",
                        "defaultText": "Here! :3"
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
                "uid": "E35B46954C30114B208884629F87EC1AEADC",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "vn.ShakeCharacter",
                "params": {
                    "characterId": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "duration": 30,
                    "waitForCompletion": 0,
                    "range": {
                        "y": 3,
                        "x": 3
                    },
                    "speed": 1000,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    }
                },
                "uid": "4B34BC9A0B9A0049681BA8F4CFB135B133BC",
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
                        "lcId": "4D14AF876898B7471A5B86F8AC92DFBC96E8",
                        "defaultText": "Oh..."
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
                "uid": "A0B68E32788E524C313A6344114F841314D8",
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
                        "lcId": "75CA1707117F2541658AD618C0C55E6A02B4",
                        "defaultText": "I thought Jack and I could walk to school together."
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
                "uid": "0623C74E6CF2D7478F898FD73D1469C24795",
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
                        "lcId": "F9C3C896649A52430B583927D550A0D82494",
                        "defaultText": "Oh! Just get in the car! :D"
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
                "uid": "35C0064C7DFB484F671805C2EFD8A200E6E7",
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
                        "lcId": "C2AB1DA86ADCA340D919A66048821F4F6914",
                        "defaultText": "We can all go together! >:D"
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
                "uid": "8F19A5B53A39E642CC8B654976AA238ED810",
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
                        "lcId": "600A0877803871415D692B53A9BE2A9FD24A",
                        "defaultText": "... alright..."
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
                "uid": "4AB36DEF857CB24EDD3B94647DC550A8BC3D",
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
                "uid": "E37DFE61553F154DD7188090ABFCFDB696A1"
            },
            {
                "id": "vn.CharacterExitScene",
                "params": {
                    "characterId": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "duration": 60,
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
                "uid": "8D73091F2824E34B3E2857D3733B6561BCCA",
                "indent": 0
            },
            {
                "id": "vn.ChangeBackground",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "graphic": {
                        "name": "backseat ajustado",
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
                        "duration": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "D3C5131C1EF57842A4688342957F4C114B31",
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
                        "x": 250,
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
                    "duration": 60,
                    "waitForCompletion": 0,
                    "fieldFlags": {
                        "duration": 0
                    }
                },
                "uid": "532AC7F7704C7642EF89D338A45126C0C670",
                "indent": 0
            },
            {
                "id": "vn.ZoomCharacter",
                "params": {
                    "characterId": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "duration": 0,
                    "waitForCompletion": 0,
                    "zooming": {
                        "x": 125,
                        "y": 125
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    }
                },
                "uid": "8911468015AED0426408A1E99F36A11ED687",
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
                        "x": 100,
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
                "uid": "2FB0CAE56D57B64B741AAEA11447BB491971",
                "indent": 0
            },
            {
                "id": "vn.ZoomCharacter",
                "params": {
                    "characterId": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "duration": 0,
                    "waitForCompletion": 0,
                    "zooming": {
                        "x": 125,
                        "y": 125
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    }
                },
                "uid": "A0247F6F3534B14D196AA9F16285D373B27F",
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
                    "duration": 0,
                    "waitForCompletion": 0,
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "uid": "75368AFD72D3A740CA185B39F471EB671695",
                "indent": 0
            },
            {
                "id": "vn.ZoomCharacter",
                "params": {
                    "characterId": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "duration": 0,
                    "waitForCompletion": 1,
                    "zooming": {
                        "x": 150,
                        "y": 150
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    }
                },
                "uid": "34D178AD97DB3944B239DD031ECF65677E07",
                "indent": 0
            },
            {
                "id": "vn.ShakeCharacter",
                "params": {
                    "characterId": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "duration": 60,
                    "waitForCompletion": 0,
                    "range": {
                        "y": 3,
                        "x": 3
                    },
                    "speed": 1000,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    }
                },
                "uid": "7A5B3F062529C545007992214292E07C5F04",
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
                        "lcId": "8336F79375E5514ACC0B4C932015A30BED99",
                        "defaultText": "Not much space here..."
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
                "uid": "9E15BCE439CE8643CA8929D4AAC97CAE5DFB",
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
                        "lcId": "7E84AE1A8CD8124F766AD877BB737314AB3C",
                        "defaultText": "Why we're going by car instead of walking?"
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
                "uid": "76694DDA23CE0145CA3901572E872C1CB0CF",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "vn.ShakeCharacter",
                "params": {
                    "characterId": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "duration": 30,
                    "waitForCompletion": 0,
                    "range": {
                        "y": 3,
                        "x": 3
                    },
                    "speed": 1000,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    }
                },
                "uid": "F01233B5825C824F7D5A6A15433DF41C633C",
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
                        "lcId": "8622FDC143171243818BADB16820C475CC7A",
                        "defaultText": "Uh..."
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
                "uid": "D6AE701254F23548747A302107151A9E352F",
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
                        "lcId": "0D656C631C80244B741A8F857A17AD9B7221",
                        "defaultText": "Let's just say it's safer this way..."
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
                "uid": "5459DCC43FF3B64A5B9AEC09539117930CCA",
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
                "uid": "CF90DAB7429E80450D782899C436FB5FAB1F",
                "indent": 0
            },
            {
                "id": "vn.CharacterExitScene",
                "params": {
                    "characterId": "36FA34704E47C543F34AA4D7316DDB11C167",
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
                "uid": "C177B4BF424BF6422C2874C7C87037D67D6C",
                "indent": 0
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
                "uid": "D9B8743F3A6DC24B538A1E51C6E11FFEAE80",
                "indent": 0
            },
            {
                "id": "vn.MessageBoxVisibility",
                "params": {
                    "duration": 30,
                    "waitForCompletion": 0,
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
                "uid": "AB7BA898873D554B9928E5E5028D217F9143",
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
                "uid": "028D6F36492885413B494F25EF3FCAB133A3",
                "indent": 0
            },
            {
                "id": "gs.ShowText",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "viewport": {
                        "type": "ui"
                    },
                    "predefinedPositionId": 8,
                    "positionType": 0,
                    "number": 0,
                    "duration": 60,
                    "waitForCompletion": 1,
                    "blendMode": 0,
                    "positionOrigin": 0,
                    "origin": 0,
                    "zOrder": 0,
                    "text": {
                        "lcId": "B54B0B378C9C704B147AB0265074E11490D2",
                        "defaultText": "A days ago..."
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
                "uid": "7D25E7BB863A9844658917863653AB7FB23B",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "gs.WaitCommand",
                "params": {
                    "time": 120
                },
                "uid": "95A4FEA04576D848487A8760891F6C581C26",
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
                "uid": "3DFE3DAF88F6A24BAB6A5742CB03556D5107",
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
                "uid": "44F61E286E14034E8E78D6558A8CB11E0B97",
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
                        "lcId": "F8122DF578F3F648CC88516904AD38AB4C40",
                        "defaultText": "**See you later, mom! <3**"
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
                "indent": 0,
                "uid": "F652987256E077433C68197848EA1829013D",
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
                        "lcId": "819FD77A22A9094E0D0A5EF055C2FE8CA031",
                        "defaultText": "Cya ^^"
                    },
                    "position": 0,
                    "characterId": "408111E5416D02407D288982EB2D059B3D48",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "C97894EE10EC72411429A874E87803E0A56D",
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
                        "lcId": "6A6AB9F17479484F841A16B310A3872D4D60",
                        "defaultText": "**Walking toward school**"
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
                "indent": 0,
                "uid": "6AAF938535FC41453248E114A63202F7F585",
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
                        "lcId": "04F84D5D8FD7954799780C359C7684A1B11F",
                        "defaultText": "**Walks along a busy street**"
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
                "indent": 0,
                "uid": "A803B2F947D3F641C75A5FB5D677F2A24729",
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
                        "lcId": "84DC04073B45A644973A3BD7FB6AEE1982C8",
                        "defaultText": "°3°"
                    },
                    "position": 0,
                    "characterId": "3877A8EE765F62443A2AFC42571F59CB6F77",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "61F765A47AE06244416949E8F9ACCB801A7D",
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
                        "lcId": "13BA75D766736647495B0ED2D87DB8DAF1D1",
                        "defaultText": "!!!"
                    },
                    "position": 0,
                    "characterId": "3877A8EE765F62443A2AFC42571F59CB6F77",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "014329203A7675415D0A795862D01654D663",
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
                "uid": "DA7DCDDC7787964CEA389683CD51EA5820F2",
                "indent": 0
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
                    "predefinedPositionId": 8,
                    "number": 0,
                    "blendMode": 0,
                    "zOrder": 0,
                    "duration": 0,
                    "origin": 1,
                    "waitForCompletion": 0,
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
                        "origin": 0,
                        "duration": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "graphic": {
                        "name": "Crash! ajustado",
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
                "uid": "BA18C18A89B71742E16A7C0428A0C683AC1B",
                "indent": 0
            },
            {
                "id": "vn.UnlockCG",
                "params": {
                    "cgId": "5CB7CF34724FE74FE58BF508742F5AD130E1"
                },
                "uid": "E14F417C751DF6428C5928E85887181E0BE1",
                "indent": 0
            },
            {
                "id": "gs.ZoomPicture",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "number": 0,
                    "duration": 0,
                    "waitForCompletion": 0,
                    "zooming": {
                        "x": 90,
                        "y": 90
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    }
                },
                "uid": "EE57F5502B7431430A38484525BB1395643C",
                "indent": 0
            },
            {
                "id": "gs.ShakePicture",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "number": 0,
                    "duration": 300,
                    "waitForCompletion": 1,
                    "range": {
                        "y": 3,
                        "x": 3
                    },
                    "speed": 1000,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    }
                },
                "uid": "BEAEA6638D939947506B93047213CCE336DE",
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
                "uid": "DB9DB8280F78234CC99868B0B95FE5BF7863",
                "indent": 0
            },
            {
                "id": "gs.ErasePicture",
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
                "uid": "656C85CA30CD884C415A0D72D665200C7C34",
                "indent": 0
            },
            {
                "id": "vn.ChangeScene",
                "params": {
                    "scene": null,
                    "savePrevious": 0,
                    "erasePictures": 0,
                    "eraseTexts": 0,
                    "eraseVideos": 0
                },
                "uid": "4D6979763D7482480608E6417B54ED6E9142",
                "indent": 0
            }
        ],
        "livePreviewDisabled": false,
        "localizableStrings": {
            "5173703B8B351346005B01E5D7325C842668": {
                "t": "**Calls by phone**",
                "d": {
                    "cid": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "eid": "DE9BE99D737141480E2A1A0182E510A5BB55"
                }
            },
            "397BA0E45F4E6343203ABE76FB0A117EA1E1": {
                "t": "**Huh?**",
                "d": {
                    "cid": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "eid": "B4B38EBD36C89342C01BE9B4A8668665B7EA"
                }
            },
            "0B5BD89A348B774E437B5D17EAC777F3F248": {
                "t": "**Picks up**",
                "d": {
                    "cid": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "eid": "D611A56B2C4F714086292B4061C4167E3F2D"
                }
            },
            "D665521952185242F45B294230625D969D7F": {
                "t": "**Morning. Not having any...\ntrouble there?**",
                "d": {
                    "cid": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "eid": "7478841C99B744464598BB2051837988CD07"
                }
            },
            "8DF48CF45F8071400F3B68772E430366D534": {
                "t": "What?",
                "d": {
                    "cid": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "eid": "A6646B327930C24C662A2BF1276B90A1A94D"
                }
            },
            "FF8E76888785764D118977946B5B3A2256EA": {
                "t": "Nooo... **Remembers Rose's bra**",
                "d": {
                    "cid": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "eid": "728CB5C04033A74D338A5B81CE81AD0E2B04"
                }
            },
            "4A1781DC77AF3844E1985744EF260E40A334": {
                "t": "Everything's fine.",
                "d": {
                    "cid": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "eid": "7B0372F06E59B44BEE79AB59E67715046190"
                }
            },
            "561319D32A758946CC3826C29DDB8E519CD0": {
                "t": "Why?",
                "d": {
                    "cid": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "eid": "619977012B4AD14FA98B36941A3E44D91BEE"
                }
            },
            "DAE1F6B9792AD442542916D3A656DD5B8CF5": {
                "t": "**Really?**",
                "d": {
                    "cid": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "eid": "239726A14C7402432E2AAB636FBD154F7514"
                }
            },
            "6E16957C65C96147DA5A14998BACC2739B6E": {
                "t": "**Well then why don't we meet and walk to school together**",
                "d": {
                    "cid": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "eid": "7A1FAB9665A0C24E33899BC8B7CAAF32397C"
                }
            },
            "4454B4523C5FA44CE218C968F3E927B5F276": {
                "t": "Sound good,",
                "d": {
                    "cid": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "eid": "4F6CC62C43FBB746B01BA2638EBA9F9EC818"
                }
            },
            "9C824AD7765D4447578BBEE01D1E380E92EB": {
                "t": "See you after breakfast?",
                "d": {
                    "cid": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "eid": "305BE5EE7E0A14482B599D87E7C87AC061DA"
                }
            },
            "866416BB7E8CF448A07BA4C633708A076D0D": {
                "t": "**Sure, see you then!**",
                "d": {
                    "cid": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "eid": "FD014174518598479B4937E71FC1CE8CCBBA"
                }
            },
            "94297B36210DB144836B1C638C13D71A2A0D": {
                "t": "Right, breakfast...",
                "d": {
                    "cid": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "eid": "F113D83E807C8541CB89A7326E1B3BCD79F0"
                }
            },
            "BB7D9F8B3A36D24C853B9B26B7BFF1B047BF": {
                "t": "Ding Dong!",
                "d": {
                    "cid": "27DBE97B7BF3984CD72BBDE11D7BE9F7D39F",
                    "eid": "B54EE40B4FD8534D33687D96F2E065CADDB9"
                }
            },
            "B105837604D93649EF894FE7C78F0E678D3A": {
                "t": "Oh! <3",
                "d": {
                    "cid": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "eid": "FF291E20355F204CD61BCD721575D3ED0FAB"
                }
            },
            "F8BE9D847AB8B443994A8CF6780539D525BF": {
                "t": "There you are, Megan!",
                "d": {
                    "cid": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "eid": "E362B5E14AE9144FE96B3A57A53DECC58D61"
                }
            },
            "89C3449B8758F245F10BA21927FC2B1A5004": {
                "t": "Here! :3",
                "d": {
                    "cid": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "eid": "E35B46954C30114B208884629F87EC1AEADC"
                }
            },
            "4D14AF876898B7471A5B86F8AC92DFBC96E8": {
                "t": "Oh...",
                "d": {
                    "cid": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "eid": "A0B68E32788E524C313A6344114F841314D8"
                }
            },
            "75CA1707117F2541658AD618C0C55E6A02B4": {
                "t": "I thought Jack and I could walk to school together.",
                "d": {
                    "cid": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "eid": "0623C74E6CF2D7478F898FD73D1469C24795"
                }
            },
            "F9C3C896649A52430B583927D550A0D82494": {
                "t": "Oh! Just get in the car! :D",
                "d": {
                    "cid": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "eid": "35C0064C7DFB484F671805C2EFD8A200E6E7"
                }
            },
            "C2AB1DA86ADCA340D919A66048821F4F6914": {
                "t": "We can all go together! >:D",
                "d": {
                    "cid": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "eid": "8F19A5B53A39E642CC8B654976AA238ED810"
                }
            },
            "600A0877803871415D692B53A9BE2A9FD24A": {
                "t": "... alright...",
                "d": {
                    "cid": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "eid": "4AB36DEF857CB24EDD3B94647DC550A8BC3D"
                }
            },
            "8336F79375E5514ACC0B4C932015A30BED99": {
                "t": "Not much space here...",
                "d": {
                    "cid": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "eid": "9E15BCE439CE8643CA8929D4AAC97CAE5DFB"
                }
            },
            "7E84AE1A8CD8124F766AD877BB737314AB3C": {
                "t": "Why we're going by car instead of walking?",
                "d": {
                    "cid": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "eid": "76694DDA23CE0145CA3901572E872C1CB0CF"
                }
            },
            "8622FDC143171243818BADB16820C475CC7A": {
                "t": "Uh...",
                "d": {
                    "cid": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "eid": "D6AE701254F23548747A302107151A9E352F"
                }
            },
            "0D656C631C80244B741A8F857A17AD9B7221": {
                "t": "Let's just say it's safer this way...",
                "d": {
                    "cid": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "eid": "5459DCC43FF3B64A5B9AEC09539117930CCA"
                }
            },
            "B54B0B378C9C704B147AB0265074E11490D2": {
                "t": "A days ago...",
                "d": null
            },
            "F8122DF578F3F648CC88516904AD38AB4C40": {
                "t": "**See you later, mom! <3**",
                "d": {
                    "cid": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "eid": "F652987256E077433C68197848EA1829013D"
                }
            },
            "819FD77A22A9094E0D0A5EF055C2FE8CA031": {
                "t": "Cya ^^",
                "d": {
                    "cid": "408111E5416D02407D288982EB2D059B3D48",
                    "eid": "C97894EE10EC72411429A874E87803E0A56D"
                }
            },
            "6A6AB9F17479484F841A16B310A3872D4D60": {
                "t": "**Walking toward school**",
                "d": {
                    "cid": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "eid": "6AAF938535FC41453248E114A63202F7F585"
                }
            },
            "04F84D5D8FD7954799780C359C7684A1B11F": {
                "t": "**Walks along a busy street**",
                "d": {
                    "cid": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "eid": "A803B2F947D3F641C75A5FB5D677F2A24729"
                }
            },
            "84DC04073B45A644973A3BD7FB6AEE1982C8": {
                "t": "°3°",
                "d": {
                    "cid": "3877A8EE765F62443A2AFC42571F59CB6F77",
                    "eid": "61F765A47AE06244416949E8F9ACCB801A7D"
                }
            },
            "13BA75D766736647495B0ED2D87DB8DAF1D1": {
                "t": "!!!",
                "d": {
                    "cid": "3877A8EE765F62443A2AFC42571F59CB6F77",
                    "eid": "014329203A7675415D0A795862D01654D663"
                }
            }
        }
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