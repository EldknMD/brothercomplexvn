GS.dataCache['BB99AEE61F1092489A68B193C7FC8ED61109'] = {
    "uid": "BB99AEE61F1092489A68B193C7FC8ED61109",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Back home",
        "type": "vn.scene",
        "parentId": "FFCF560B85A9A84CAC2B5198C6C1427C016D",
        "chapterUid": "FFCF560B85A9A84CAC2B5198C6C1427C016D",
        "order": 4,
        "localizableStrings": {
            "A93F23BD7391C6478B39BB07C61AC40652EB": {
                "t": "**Talking by phone**",
                "d": {
                    "cid": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "eid": "6DF5FFF8304138498E3BB09165A12B9453C4"
                }
            },
            "C6DDE3178C075047DA8B3071927ADF17C50D": {
                "t": "Hello?",
                "d": {
                    "cid": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "eid": "64B94096609D6244D009E3B8F42A964EEBE8"
                }
            },
            "8737D95272CE5542BD0831E68D65727A3F64": {
                "t": "Yeah... I followed your advice and it went perfectly.",
                "d": {
                    "cid": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "eid": "118DEAF58DCB76400C5AC81363FC4D268EC7"
                }
            },
            "DD9F5183608BC74DC68A37F1C1B9C02E2652": {
                "t": "What?",
                "d": {
                    "cid": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "eid": "3A7010DA3237744FCE3A05631C67832543D7"
                }
            },
            "707F77E86ED8E04B414AB0A5A84F634340BF": {
                "t": "No! >_<",
                "d": {
                    "cid": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "eid": "6D3F823D6529A04798882AF1FB3FC751F3BE"
                }
            },
            "A6D4B5A45B255640C65ACCC7CFF9319A161F": {
                "t": "I-I would never!",
                "d": {
                    "cid": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "eid": "195D1ECC5E8E654D76687EB4C9EC04CD22F8"
                }
            },
            "2305F44A8FBF4141C9499A1535548E5EDDC4": {
                "t": "No. I haven't told him yet. ;)",
                "d": {
                    "cid": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "eid": "5DD318D94EAB1543206A9466D87060C521C3"
                }
            },
            "7B319B10550CD843184B98B08D6A2F714C03": {
                "t": "Yeah. I'm so ready for classes.<3 **giggles**",
                "d": {
                    "cid": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "eid": "947C8E31875DE546581BB1A4DD04FC552AB1"
                }
            }
        },
        "commands": [
            {
                "id": "gs.WaitCommand",
                "params": {
                    "time": 180
                },
                "uid": "D02946A750916347121931B3D147A9F44467",
                "indent": 0
            },
            {
                "id": "vn.ChangeBackground",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "graphic": {
                        "name": "PlayerHomeF_Night4",
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
                "uid": "1BA4FCE96C84994E4C1BA5A8E286AC45574F",
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
                    "duration": 60,
                    "waitForCompletion": 1,
                    "fieldFlags": {
                        "duration": 0
                    }
                },
                "uid": "C16F8C8D78CDC24D2C69982799C7BDA828BE",
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
                "uid": "3088BD8C584F494D732A52A82A8FBF11EDFA",
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
                        "lcId": "A93F23BD7391C6478B39BB07C61AC40652EB",
                        "defaultText": "**Talking by phone**"
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
                "uid": "6DF5FFF8304138498E3BB09165A12B9453C4",
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
                        "lcId": "C6DDE3178C075047DA8B3071927ADF17C50D",
                        "defaultText": "Hello?"
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
                "uid": "64B94096609D6244D009E3B8F42A964EEBE8",
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
                        "lcId": "8737D95272CE5542BD0831E68D65727A3F64",
                        "defaultText": "Yeah... I followed your advice and it went perfectly."
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
                "uid": "118DEAF58DCB76400C5AC81363FC4D268EC7",
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
                        "lcId": "DD9F5183608BC74DC68A37F1C1B9C02E2652",
                        "defaultText": "What?"
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
                "uid": "3A7010DA3237744FCE3A05631C67832543D7",
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
                    "expressionId": "5228FD46589FF848D528C04139EF703D9701",
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "uid": "C1194BBC2CF3024E778AF263B7731B63AC4E",
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
                        "lcId": "707F77E86ED8E04B414AB0A5A84F634340BF",
                        "defaultText": "No! >_<"
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
                "uid": "6D3F823D6529A04798882AF1FB3FC751F3BE",
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
                        "lcId": "A6D4B5A45B255640C65ACCC7CFF9319A161F",
                        "defaultText": "I-I would never!"
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
                "uid": "195D1ECC5E8E654D76687EB4C9EC04CD22F8",
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
                "indent": 0,
                "uid": "841721CD3542C7487C1BD87850090A742D67"
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
                        "lcId": "2305F44A8FBF4141C9499A1535548E5EDDC4",
                        "defaultText": "No. I haven't told him yet. ;)"
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
                "uid": "5DD318D94EAB1543206A9466D87060C521C3",
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
                        "y": 3,
                        "x": 0
                    },
                    "speed": 1000,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    }
                },
                "uid": "42B48209111CF84C183B23F507CAA6C533C0",
                "indent": 0
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
                    "waitForCompletion": 1,
                    "characterId": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "expressionId": "F01A3B7466424641365A53F18171DB2B122F",
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "indent": 0,
                "uid": "17E6476E184FB649163A559318D88F37F866"
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
                        "lcId": "7B319B10550CD843184B98B08D6A2F714C03",
                        "defaultText": "Yeah. I'm so ready for classes.<3 **giggles**"
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
                "uid": "947C8E31875DE546581BB1A4DD04FC552AB1",
                "indent": 0,
                "expanded": true
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
                    "duration": 60,
                    "waitForCompletion": 1,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "CC5D61A83342714F0269D7D4FE8F88A65942",
                "indent": 0
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
                    "duration": 60,
                    "waitForCompletion": 1,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "22525EAD6766A145C62A17D323ECA2D09F7A",
                "indent": 0
            },
            {
                "id": "vn.CharacterExitScene",
                "params": {
                    "characterId": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "duration": 0,
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
                        "duration": 1
                    }
                },
                "uid": "6829358C2C4AE8450A391548F6A1459D9439",
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
                "uid": "43F5DBE20FB9304A78398539F16461B461C0",
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
                "uid": "6E1674A573F102494C48A67541E52D4A9165",
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