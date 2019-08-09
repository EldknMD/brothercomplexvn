GS.dataCache['E6C8F95818D22441611BF8838E2159852470'] = {
    "uid": "E6C8F95818D22441611BF8838E2159852470",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Tren",
        "type": "vn.scene",
        "parentId": "B0991EDA614B0542656A9BF6A31AF3C8CD27",
        "chapterUid": "B0991EDA614B0542656A9BF6A31AF3C8CD27",
        "order": 2,
        "localizableStrings": {
            "3ECC0E3E56069947765A5BC8AFE6A19C4426": {
                "t": "It's good to be back home...",
                "d": {
                    "cid": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "eid": "BB91712253F6C440DA5B8F34D6AFB95E1C1E"
                }
            },
            "B91FBED19EBAE1434C88BE3754F328F19817": {
                "t": "Thanks for coming to pick me up, Rose.",
                "d": {
                    "cid": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "eid": "8A056EAF39C43147914B76648643788281E9"
                }
            },
            "7DBA2B9A11DF8640BE3BDE21D4B09C99932E": {
                "t": "How could I refuse?",
                "d": {
                    "cid": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "eid": "B46238AD806AD84FBB0BD9F391CC1EC6A828"
                }
            },
            "A111B53C823AE24B83598EA543D721CFE3E4": {
                "t": " I couldn't wait any longer to see onii-chan!",
                "d": {
                    "cid": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "eid": "3D12C4C2596AB74C741A4931EB10457A2475"
                }
            },
            "8B3527C8097C8246BB4A7E15ED3C5137C8AA": {
                "t": "EH?",
                "d": {
                    "cid": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "eid": "3AA4526F0B4D5849791801304E6C0B19D766"
                }
            },
            "3B6A29D7302AB74799288993A046C0A8254E": {
                "t": "Onii-chan?",
                "d": {
                    "cid": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "eid": "7075D45E560F144ACD1B5B3684CB6637C5DA"
                }
            },
            "531874B40B22734050892D5769558B0D81C2": {
                "t": "Uhm... a-are you okay?",
                "d": {
                    "cid": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "eid": "B3012ADC75A2D24BED2A73B6F73F4D501A27"
                }
            },
            "8980584A125FA94EE75B9C09DF7CEC93D49D": {
                "t": "\nNow arriving at station.\nPlease check all your belongings.",
                "d": {
                    "cid": "3AF4AAA052BC8444C759E4881B554DF923F8",
                    "eid": "83B96F5202B091417C899622F1FC71125041"
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
                        "name": "Tutorial_-_Good_Mood",
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
                "uid": "B52AE22229CA01446A1BC6072BFE7DCE2A4C",
                "indent": 0
            },
            {
                "id": "vn.ChangeBackground",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "graphic": {
                        "name": "tren con reducir",
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
                "uid": "B211D5E65F3C624F63692D43ED74D84003C3",
                "indent": 0
            },
            {
                "id": "vn.CharacterJoinScene",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "predefinedPositionId": 6,
                    "expressionId": null,
                    "characterId": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "zOrder": 500,
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
                        "x": 150,
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
                        "duration": 0,
                        "easing.type": 1,
                        "animation.type": 1,
                        "motionBlur.enabled": 1,
                        "origin": 1,
                        "zOrder": 0,
                        "blendMode": 1,
                        "viewport.type": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "3531CFFE40F248464028BF66B6430DE4B6FF",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "vn.CharacterJoinScene",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "predefinedPositionId": 4,
                    "expressionId": "8869B0234349C2426D499493503B84B52F87",
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
                        "x": 500,
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
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "2272271E540B364E1B194E51E69382B373B4",
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
                "uid": "B6FD29B0986A774E8669D4B56E2A86519D67",
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
                        "lcId": "3ECC0E3E56069947765A5BC8AFE6A19C4426",
                        "defaultText": "It's good to be back home..."
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
                "uid": "BB91712253F6C440DA5B8F34D6AFB95E1C1E",
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
                        "lcId": "B91FBED19EBAE1434C88BE3754F328F19817",
                        "defaultText": "Thanks for coming to pick me up, Rose."
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
                "uid": "8A056EAF39C43147914B76648643788281E9",
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
                        "lcId": "7DBA2B9A11DF8640BE3BDE21D4B09C99932E",
                        "defaultText": "How could I refuse?"
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
                "uid": "B46238AD806AD84FBB0BD9F391CC1EC6A828",
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
                        "lcId": "A111B53C823AE24B83598EA543D721CFE3E4",
                        "defaultText": " I couldn't wait any longer to see onii-chan!"
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
                "uid": "3D12C4C2596AB74C741A4931EB10457A2475",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShakeScreen",
                "params": {
                    "duration": 60,
                    "waitForCompletion": 1,
                    "range": {
                        "y": 5,
                        "x": 5
                    },
                    "speed": 500,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    }
                },
                "uid": "63C56B9342C1874FBD3874552F4DC7F3C971",
                "indent": 0
            },
            {
                "id": "gs.PanScreen",
                "params": {
                    "duration": 0,
                    "waitForCompletion": 1,
                    "position": {
                        "x": -1000,
                        "y": 0
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    }
                },
                "uid": "1D91BFDA242F054F1F7B2A83016EBE88C8AB",
                "indent": 0
            },
            {
                "id": "gs.PanScreen",
                "params": {
                    "duration": 30,
                    "waitForCompletion": 1,
                    "position": {
                        "x": 1000,
                        "y": 0
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    }
                },
                "uid": "8206B4703668564FBE0BCEB5706CD5CFECD9",
                "indent": 0
            },
            {
                "id": "vn.MoveCharacter",
                "params": {
                    "characterId": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "predefinedPositionId": 0,
                    "duration": 12,
                    "waitForCompletion": 0,
                    "positionType": 2,
                    "position": {
                        "x": 550,
                        "y": 200
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    }
                },
                "uid": "771A99F54C4049410D2A4281171EC7BAA562",
                "indent": 0
            },
            {
                "id": "vn.RotateCharacter",
                "params": {
                    "characterId": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "duration": 24,
                    "waitForCompletion": 0,
                    "speed": 100,
                    "direction": 0,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "fieldFlags": {
                        "easing.type": 1
                    }
                },
                "uid": "391F83D22B2CE14E7178B8E129D73A130FC7",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "gs.PanScreen",
                "params": {
                    "duration": 30,
                    "waitForCompletion": 0,
                    "position": {
                        "x": 0,
                        "y": 0
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    }
                },
                "uid": "4F7E0A1B8A3DF34C050801351031C9516564",
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
                        "lcId": "8B3527C8097C8246BB4A7E15ED3C5137C8AA",
                        "defaultText": "EH?"
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
                "uid": "3AA4526F0B4D5849791801304E6C0B19D766",
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
                        "lcId": "3B6A29D7302AB74799288993A046C0A8254E",
                        "defaultText": "Onii-chan?"
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
                "uid": "7075D45E560F144ACD1B5B3684CB6637C5DA",
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
                        "lcId": "531874B40B22734050892D5769558B0D81C2",
                        "defaultText": "Uhm... a-are you okay?"
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
                "uid": "B3012ADC75A2D24BED2A73B6F73F4D501A27",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "vn.ShakeCharacter",
                "params": {
                    "characterId": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "duration": 60,
                    "waitForCompletion": 1,
                    "range": {
                        "y": 2,
                        "x": 2
                    },
                    "speed": 500,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    }
                },
                "uid": "51C14C5F49D736412B496022211A243FA685",
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
                        "lcId": "8980584A125FA94EE75B9C09DF7CEC93D49D",
                        "defaultText": "\nNow arriving at station.\nPlease check all your belongings."
                    },
                    "position": 0,
                    "characterId": "3AF4AAA052BC8444C759E4881B554DF923F8",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "83B96F5202B091417C899622F1FC71125041",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "vn.ChangeBackground",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "graphic": null,
                    "layer": 0,
                    "duration": 240,
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
                "uid": "4EF1A2B03984B1418E585ED8E09E4EB8C52A",
                "indent": 0
            },
            {
                "id": "gs.StopMusic",
                "params": {
                    "layer": 0,
                    "fadeOutDuration": 240,
                    "fieldFlags": {
                        "fadeOutDuration": 0
                    }
                },
                "uid": "A2FF04957B57C34E6C5A5F56EDC3F91F7F51",
                "indent": 0
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
                "uid": "C4276CC85E67694C022B2C877BBBD838EB54",
                "indent": 0
            },
            {
                "id": "vn.CharacterExitScene",
                "params": {
                    "characterId": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "duration": 240,
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
                "uid": "0D7B367D7A05E64DF05A1F51BF67861BC4B6",
                "indent": 0
            },
            {
                "id": "vn.CharacterExitScene",
                "params": {
                    "characterId": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "duration": 240,
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
                "uid": "642641C77877474DB078BFC53B2C86D31A3E",
                "indent": 0
            },
            {
                "id": "vn.ChangeScene",
                "params": {
                    "scene": {
                        "uid": "2DBF2E3A2751D541AE290CE9B64C15907CB2",
                        "name": "caminando"
                    },
                    "savePrevious": 0,
                    "erasePictures": 0,
                    "eraseTexts": 0,
                    "eraseVideos": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "A4F974E20140C841C718D198978CCCAA1D3B",
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